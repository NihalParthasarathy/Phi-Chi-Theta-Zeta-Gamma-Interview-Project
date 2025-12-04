(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://essydcslzmjibxyfqjdm.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzc3lkY3Nsem1qaWJ4eWZxamRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2OTQxNTIsImV4cCI6MjA3NzI3MDE1Mn0.JXciUDFbhUxpG0S-fpAF79qoktP3UDpx1oAa6yFgzb4"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "4baaa7c1311131d36d81da5427f15613237d597cb5f841f13964a4ee7e657e01") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4baaa7c1311131d36d81da5427f15613237d597cb5f841f13964a4ee7e657e01";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AuthProvider[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                    "AuthProvider[useEffect() > (anonymous)()]": (t3)=>{
                        const { data: t4 } = t3;
                        const { session: session_0 } = t4;
                        setSession(session_0);
                        setUser(session_0?.user ?? null);
                        setLoading(false);
                    }
                }["AuthProvider[useEffect() > (anonymous)()]"]);
                const { data: t5 } = __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                    "AuthProvider[useEffect() > supabase.auth.onAuthStateChange()]": (_event, session_1)=>{
                        setSession(session_1);
                        setUser(session_1?.user ?? null);
                        setLoading(false);
                    }
                }["AuthProvider[useEffect() > supabase.auth.onAuthStateChange()]"]);
                const { subscription } = t5;
                return ()=>subscription.unsubscribe();
            }
        })["AuthProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const signIn = _AuthProviderSignIn;
    const signUp = _AuthProviderSignUp;
    const signOut = _AuthProviderSignOut;
    let t3;
    if ($[3] !== loading || $[4] !== session || $[5] !== user) {
        t3 = {
            user,
            session,
            signIn,
            signUp,
            signOut,
            loading
        };
        $[3] = loading;
        $[4] = session;
        $[5] = user;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== children || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/contexts/AuthContext.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(AuthProvider, "sIDOCMze9iVqwxkgWIhOu8vskSI=");
_c = AuthProvider;
async function _AuthProviderSignOut() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
}
async function _AuthProviderSignUp(email_0, password_0, fullName) {
    ;
    try {
        const { error: error_2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email: email_0,
            password: password_0,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });
        if (error_2) {
            return {
                error: error_2.message
            };
        }
        return {};
    } catch (t0) {
        const error_1 = t0;
        return {
            error: error_1.message || "An error occurred during sign up"
        };
    }
}
async function _AuthProviderSignIn(email, password) {
    ;
    try {
        const { error: error_0 } = await __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (error_0) {
            return {
                error: error_0.message
            };
        }
        return {};
    } catch (t0) {
        const error = t0;
        return {
            error: error.message || "An error occurred during sign in"
        };
    }
}
const useAuth = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "4baaa7c1311131d36d81da5427f15613237d597cb5f841f13964a4ee7e657e01") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4baaa7c1311131d36d81da5427f15613237d597cb5f841f13964a4ee7e657e01";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/ClientLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ClientLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "0366e8154f197059e7c65a4f3faec828a9de8eee8e7c79c671f4b7f12e6658f8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0366e8154f197059e7c65a4f3faec828a9de8eee8e7c79c671f4b7f12e6658f8";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/ClientLayout.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Phi-Chi-Theta-Zeta-Gamma-Interview-Project_apps_frontend_src_331911a4._.js.map