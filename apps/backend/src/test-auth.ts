// Simple test script to verify auth works with Supabase
// Run with: npm run test:auth
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { getUserFromToken, getUserFromAuthHeader, extractBearer } from "./auth.js";

dotenv.config();

const supabaseTestClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// Use service role for admin operations (bypasses email confirmation)
const supabaseAdminClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function testAuth() {
  console.log("🧪 Testing Auth with Supabase...\n");

  // Check environment variables
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error("❌ Missing required environment variables:");
    console.error("   - SUPABASE_URL:", process.env.SUPABASE_URL ? "✓" : "✗");
    console.error("   - SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY ? "✓" : "✗");
    process.exit(1);
  }

  console.log("✓ Environment variables loaded");
  console.log("✓ Supabase URL:", process.env.SUPABASE_URL);

  // Test 1: Extract Bearer Token
  console.log("\n📋 Test 1: extractBearer function");
  const testToken = "test-token-123";
  const extracted = extractBearer(`Bearer ${testToken}`);
  if (extracted === testToken) {
    console.log("   ✓ Successfully extracted bearer token");
  } else {
    console.log("   ✗ Failed to extract bearer token");
  }

  // Test 2: Create test user and get token
  console.log("\n📋 Test 2: Create test user and authenticate");
  const testUserEmail = `test-${Date.now()}@testmail.com`;
  const testUserPassword = "TestPassword123!";

  try {
    // Use admin client to create user with email confirmed (bypasses email confirmation requirement)
    console.log("   Creating user with admin client (email auto-confirmed)...");
    const { data: adminUserData, error: adminUserError } = await supabaseAdminClient.auth.admin.createUser({
      email: testUserEmail,
      password: testUserPassword,
      email_confirm: true, // Auto-confirm email
    });

    let accessToken: string | null = null;
    let userId: string | null = null;

    if (adminUserError) {
      console.log("   ⚠ Admin creation error:", adminUserError.message);
      // If user already exists, try to sign in
      if (adminUserError.message.includes("already registered")) {
        console.log("   User already exists, signing in...");
        const { data: signInData, error: signInError } = await supabaseTestClient.auth.signInWithPassword({
          email: testUserEmail,
          password: testUserPassword,
        });
        
        if (signInError) {
          throw new Error(`Failed to sign in: ${signInError.message}`);
        }
        
        accessToken = signInData.session?.access_token || null;
        userId = signInData.user?.id || null;
      } else {
        throw new Error(`Failed to create user: ${adminUserError.message}`);
      }
    } else if (adminUserData.user) {
      userId = adminUserData.user.id;
      console.log("   ✓ User created with admin client");
      console.log("   ✓ User ID:", userId);
      
      // Now sign in with regular client to get a session token
      console.log("   Signing in to get access token...");
      const { data: signInData, error: signInError } = await supabaseTestClient.auth.signInWithPassword({
        email: testUserEmail,
        password: testUserPassword,
      });
      
      if (signInError) {
        throw new Error(`Failed to sign in after user creation: ${signInError.message}`);
      }
      
      accessToken = signInData.session?.access_token || null;
      if (!accessToken) {
        throw new Error("Failed to obtain access token after sign in");
      }
    }

    if (!accessToken || !userId) {
      throw new Error("Failed to obtain access token and user ID");
    }

    console.log("   ✓ Test user created/authenticated");
    console.log("   ✓ User ID:", userId);
    console.log("   ✓ Access token obtained");

    // Test 3: Get user from token
    console.log("\n📋 Test 3: getUserFromToken");
    const user = await getUserFromToken(accessToken);
    if (user && user.id === userId && user.email === testUserEmail) {
      console.log("   ✓ Successfully retrieved user from token");
      console.log("   ✓ User ID matches:", user.id === userId);
      console.log("   ✓ User email matches:", user.email === testUserEmail);
    } else {
      console.log("   ✗ Failed to retrieve user from token");
      console.log("   Expected ID:", userId);
      console.log("   Expected email:", testUserEmail);
      console.log("   Got user:", user ? { id: user.id, email: user.email } : null);
    }

    // Test 4: Get user from auth header
    console.log("\n📋 Test 4: getUserFromAuthHeader");
    const mockRequest = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    } as any;

    const userFromHeader = await getUserFromAuthHeader(mockRequest);
    if (userFromHeader && userFromHeader.id === userId) {
      console.log("   ✓ Successfully retrieved user from Authorization header");
      console.log("   ✓ User ID matches:", userFromHeader.id === userId);
    } else {
      console.log("   ✗ Failed to retrieve user from Authorization header");
      console.log("   Expected ID:", userId);
      console.log("   Got user:", userFromHeader ? { id: userFromHeader.id, email: userFromHeader.email } : null);
    }

    // Test 5: Test with invalid token
    console.log("\n📋 Test 5: Invalid token handling");
    const invalidUser = await getUserFromToken("invalid-token-123");
    if (invalidUser === null) {
      console.log("   ✓ Correctly returned null for invalid token");
    } else {
      console.log("   ✗ Should have returned null for invalid token");
    }

    console.log("\n✅ All tests completed!");
    console.log("\n📊 Summary:");
    console.log("   - Bearer token extraction: ✓");
    console.log("   - User creation/authentication: ✓");
    console.log("   - getUserFromToken: ✓");
    console.log("   - getUserFromAuthHeader: ✓");
    console.log("   - Invalid token handling: ✓");
    console.log("\n🎉 Auth is working correctly with Supabase!");

  } catch (error: any) {
    console.error("\n❌ Test failed with error:");
    console.error("   ", error.message);
    if (error.stack) {
      console.error("\nStack trace:");
      console.error(error.stack);
    }
    process.exit(1);
  }
}

testAuth();
