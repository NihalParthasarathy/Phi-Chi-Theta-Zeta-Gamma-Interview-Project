import { Request, Response, NextFunction } from "express";
import { supabase } from "./supabaseClient";

type SupabaseUser = {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, any>;
  app_metadata?: Record<string, any>;
  [k: string]: any;
};

type RequestWithUser = Request & { user?: SupabaseUser };

/**
 * Extract a bearer token from an Authorization header value.
 */
export function extractBearer(tokenHeader?: string | null): string | null {
  if (!tokenHeader) return null;
  const parts = tokenHeader.split(" ");
  if (parts.length !== 2) return null;
  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) return null;
  return token;
}

/**
 * Given an access token, return the Supabase user or null.
 * Supports multiple supabase-js versions and falls back to the auth REST endpoint.
 */
export async function getUserFromToken(token: string | null): Promise<SupabaseUser | null> {
  if (!token) return null;

  try {
    // Try modern supabase.auth.getUser(...) (v2)
    const authAny = (supabase as any).auth;
    if (authAny) {
      try {
        // v2: supabase.auth.getUser(token | { access_token: token })
        if (typeof authAny.getUser === "function") {
          // Some v2 signatures accept the token directly, others expect an object.
          const maybeResp = await authAny.getUser?.(token).catch(() => authAny.getUser?.({ access_token: token }));
          if (maybeResp?.data?.user) return maybeResp.data.user as SupabaseUser;
        }

        // v1: supabase.auth.api.getUser(token)
        if (authAny.api && typeof authAny.api.getUser === "function") {
          const resp = await authAny.api.getUser(token);
          if (resp?.data) return resp.data as SupabaseUser;
        }
      } catch {
        // swallow and try fallback
      }
    }

    // Fallback: call Supabase auth REST endpoint directly
    const supabaseUrl = process.env.SUPABASE_URL;
    if (supabaseUrl) {
      const url = supabaseUrl.replace(/\/$/, "") + "/auth/v1/user";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          apikey: process.env.SUPABASE_ANON_KEY || "",
        },
      });
      if (res.ok) {
        const data = await res.json();
        // REST returns the user object directly
        if (data && data.id) return data as SupabaseUser;
      }
    }
  } catch {
    // ignore and return null below
  }

  return null;
}

/**
 * Read the Authorization header from an Express request and return the user (or null).
 */
export async function getUserFromAuthHeader(req: Request): Promise<SupabaseUser | null> {
  // Try Authorization header first, then cookies
  const header = req.headers["authorization"] as string | undefined | null;
  let token = extractBearer(header ?? null);
  if (token) return await getUserFromToken(token);

  // Try cookies (no cookie-parser required)
  const cookieHeader = req.headers["cookie"] as string | undefined | null;
  if (!cookieHeader) return null;

  // Common Supabase cookie names and formats may include JSON blobs.
  // Try to find known cookie keys first, then try to parse any JSON value
  const cookies: Record<string, string> = {};
  for (const part of cookieHeader.split(";")) {
    const [k, ...v] = part.split("=");
    if (!k) continue;
    cookies[k.trim()] = decodeURIComponent((v || []).join("=").trim());
  }

  const candidates = [
    "__Host-supabase-auth-token",
    "supabase-auth-token",
    "supabase-token",
    "sb:token",
    "sb-access-token",
    "sb-session",
  ];

  for (const name of candidates) {
    const val = cookies[name];
    if (!val) continue;
    // Some Supabase cookies store a JSON string containing access_token
    try {
      const parsed = JSON.parse(val);
      if (parsed && parsed.access_token) {
        return await getUserFromToken(parsed.access_token as string);
      }
    } catch {
      // not JSON, maybe the cookie value is the token itself
      return await getUserFromToken(val);
    }
  }

  // As a last resort, try to find any cookie value that parses to an object
  for (const v of Object.values(cookies)) {
    try {
      const parsed = JSON.parse(v);
      if (parsed && parsed.access_token) return await getUserFromToken(parsed.access_token as string);
    } catch {
      // ignore
    }
  }

  return null;
}

/**
 * Express middleware: require an authenticated user. Attaches `req.user` when present.
 */
export async function requireAuth(req: RequestWithUser, res: Response, next: NextFunction) {
  try {
    // Try to populate req.user from header or cookies
    const user = req.user ?? (await getUserFromAuthHeader(req));
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}

/**
 * Express middleware factory: require a specific role (or one of allowed roles).
 * Checks `user.user_metadata.role`, `user.app_metadata.role`, or `user.role`.
 */
export function requireRole(allowed: string | string[]) {
  const allowedRoles = Array.isArray(allowed) ? allowed : [allowed];
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      // If `requireAuth` wasn't used, try to populate user from header
      let user = req.user;
      if (!user) {
        const fetched = await getUserFromAuthHeader(req);
        if (fetched) user = fetched;
      }
      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      const role =
        (user.user_metadata && user.user_metadata.role) ||
        (user.app_metadata && user.app_metadata.role) ||
        (user.role as string | undefined);

      if (!role || !allowedRoles.includes(role)) {
        res.status(403).json({ error: "Forbidden" });
        return;
      }

      req.user = user;
      next();
    } catch {
      res.status(403).json({ error: "Forbidden" });
    }
  };
}

export default {
  extractBearer,
  getUserFromToken,
  getUserFromAuthHeader,
  requireAuth,
  requireRole,
};
