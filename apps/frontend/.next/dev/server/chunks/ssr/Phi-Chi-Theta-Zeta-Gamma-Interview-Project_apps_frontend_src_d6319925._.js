module.exports = [
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'http://localhost:4000';
// Helper function to get auth headers
const getAuthHeaders = async ()=>{
    const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
    if (!session?.access_token) {
        throw new Error('No authentication token available');
    }
    return {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json'
    };
};
const api = {
    // Submit interview evaluation
    submitEvaluation: async (data)=>{
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_BASE_URL}/api/evaluations`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit evaluation');
        }
        return await response.json();
    },
    // Get all evaluations
    getEvaluations: async ()=>{
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_BASE_URL}/api/evaluations`, {
            method: 'GET',
            headers
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch evaluations');
        }
        return await response.json();
    },
    // Get interview schedule
    getSchedule: async ()=>{
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_BASE_URL}/api/schedule`, {
            method: 'GET',
            headers
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch schedule');
        }
        return await response.json();
    },
    // Get analytics
    getAnalytics: async ()=>{
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_BASE_URL}/api/analytics`, {
            method: 'GET',
            headers
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch analytics');
        }
        return await response.json();
    }
};
}),
"[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dashboard() {
    const { user, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [schedule, setSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dataLoading, setDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('evaluation');
    // Form state for new evaluation
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        candidateName: '',
        candidateEmail: '',
        interviewerName: user?.user_metadata?.full_name || '',
        interviewerEmail: user?.email || '',
        score: '',
        notes: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                setDataLoading(true);
                const [evaluationsData, scheduleData, analyticsData] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getEvaluations(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getSchedule(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getAnalytics()
                ]);
                setNotes(evaluationsData);
                setSchedule(scheduleData);
                setAnalytics(analyticsData);
            } catch (error) {
                console.error('Error loading data:', error);
                // Set empty defaults on error
                setNotes([]);
                setSchedule([]);
                setAnalytics({
                    totalInterviews: 0,
                    avgScore: 0,
                    scoreDistribution: {},
                    medianScore: 0,
                    modeScore: 0
                });
            } finally{
                setDataLoading(false);
            }
        };
        loadData();
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            // Submit evaluation to API
            await __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].submitEvaluation(formData);
            // Refresh evaluations and analytics after successful submission
            const [newEvaluations, newAnalytics] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getEvaluations(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getAnalytics()
            ]);
            setNotes(newEvaluations);
            setAnalytics(newAnalytics);
            setSuccess(true);
            setFormData({
                candidateName: '',
                candidateEmail: '',
                interviewerName: user?.user_metadata?.full_name || '',
                interviewerEmail: user?.email || '',
                score: '',
                notes: ''
            });
        } catch (err) {
            setError(err.message || 'Something went wrong. Try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${darkMode ? 'dark bg-zinc-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight",
                            children: "Rush Interview Scoring System"
                        }, void 0, false, {
                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                            children: "Rush Team Access"
                                        }, void 0, false, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                // In a real app, this would redirect to admin panel
                                                window.open('/admin', '_blank');
                                            },
                                            className: "relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none bg-blue-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs transform translate-x-8",
                                                children: "👥"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDarkMode(!darkMode),
                                    className: "relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none",
                                    style: {
                                        backgroundColor: darkMode ? '#3b82f6' : '#e5e7eb'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${darkMode ? 'translate-x-8' : 'translate-x-0'}`,
                                        children: darkMode ? '🌙' : '☀️'
                                    }, void 0, false, {
                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                            children: user?.user_metadata?.full_name || user?.email
                                        }, void 0, false, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded",
                                            children: "Rush Team"
                                        }, void 0, false, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: signOut,
                                            className: "text-sm px-3 py-1 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition",
                                            children: "Sign Out"
                                        }, void 0, false, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-2",
                                    children: [
                                        {
                                            id: 'evaluation',
                                            label: 'Interview Evaluation',
                                            icon: '📝'
                                        },
                                        {
                                            id: 'schedule',
                                            label: 'Interview Schedule',
                                            icon: '📅'
                                        },
                                        {
                                            id: 'notes',
                                            label: 'Past Notes',
                                            icon: '📋'
                                        },
                                        {
                                            id: 'analytics',
                                            label: 'Rush Analytics',
                                            icon: '📊'
                                        }
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(tab.id),
                                            className: `w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${activeTab === tab.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tab.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                tab.label
                                            ]
                                        }, tab.id, true, {
                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-8",
                                children: [
                                    activeTab === 'evaluation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100",
                                                children: "Interview Evaluation Form"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-600 dark:text-zinc-400 mb-6",
                                                children: "Fill out this form after completing an interview"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-semibold text-green-600 dark:text-green-400 mb-3",
                                                        children: "Evaluation Submitted! 🎉"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-700 dark:text-zinc-300 mb-4",
                                                        children: "Thanks for submitting your feedback!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                                                        onClick: ()=>setSuccess(false),
                                                        children: "Submit Another"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                        children: "Interviewer Name *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: formData.interviewerName,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                interviewerName: e.target.value
                                                                            }),
                                                                        placeholder: "Your full name",
                                                                        className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                        children: "Interviewer Email *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        value: formData.interviewerEmail,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                interviewerEmail: e.target.value
                                                                            }),
                                                                        placeholder: "your.email@example.com",
                                                                        className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                        children: "Candidate Name *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: formData.candidateName,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                candidateName: e.target.value
                                                                            }),
                                                                        placeholder: "Candidate's full name",
                                                                        className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                        children: "Candidate Email *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 250,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        value: formData.candidateEmail,
                                                                        onChange: (e)=>setFormData({
                                                                                ...formData,
                                                                                candidateEmail: e.target.value
                                                                            }),
                                                                        placeholder: "candidate.email@example.com",
                                                                        className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                children: "Score (1-10) *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData.score,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        score: e.target.value
                                                                    }),
                                                                className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                required: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select a score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    [
                                                                        ...Array(10)
                                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: i + 1,
                                                                            children: i + 1
                                                                        }, i + 1, false, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",
                                                                children: "Notes / Comments"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: formData.notes,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        notes: e.target.value
                                                                    }),
                                                                placeholder: "Write your feedback and observations...",
                                                                rows: 5,
                                                                className: "w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 23
                                                    }, this),
                                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: loading,
                                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed",
                                                        children: loading ? 'Submitting...' : 'Submit Evaluation'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === 'schedule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100",
                                                children: "Interview Schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            dataLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-600 dark:text-zinc-400",
                                                        children: "Loading schedule..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: schedule.length > 0 ? schedule.map((interview)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-zinc-800 dark:text-zinc-100",
                                                                            children: interview.candidate_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                            children: interview.candidate_email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 333,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                            children: [
                                                                                "Interviewer: ",
                                                                                interview.interviewer_name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 336,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                            children: new Date(interview.scheduled_time).toLocaleString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-1 text-xs rounded ${interview.status === 'scheduled' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : interview.status === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`,
                                                                    children: interview.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, interview.id, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 25
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-500 dark:text-zinc-500 text-center py-8",
                                                    children: "No scheduled interviews found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === 'notes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100",
                                                children: "Past Interview Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this),
                                            dataLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-600 dark:text-zinc-400",
                                                        children: "Loading notes..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: notes.length > 0 ? notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-zinc-800 dark:text-zinc-100",
                                                                        children: note.candidate_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            note.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded",
                                                                                children: [
                                                                                    "Score: ",
                                                                                    note.score,
                                                                                    "/10"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 382,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-zinc-500 dark:text-zinc-500",
                                                                                children: new Date(note.created_at).toLocaleDateString()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 386,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-600 dark:text-zinc-400 mb-1",
                                                                children: [
                                                                    "Interviewer: ",
                                                                    note.interviewer_name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-zinc-700 dark:text-zinc-300",
                                                                children: note.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, note.id, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 25
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-500 dark:text-zinc-500 text-center py-8",
                                                    children: "No interview notes found"
                                                }, void 0, false, {
                                                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === 'analytics' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100",
                                                children: "Rush Interview Analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            dataLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-600 dark:text-zinc-400",
                                                        children: "Loading analytics..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-600 dark:text-zinc-400 mb-6",
                                                        children: [
                                                            "Dashboard showing statistics from ",
                                                            analytics?.totalInterviews || 0,
                                                            " completed interviews"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-2xl font-bold text-blue-600 dark:text-blue-400",
                                                                        children: analytics?.totalInterviews || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                        children: "Total Interviews"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 427,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-2xl font-bold text-green-600 dark:text-green-400",
                                                                        children: analytics?.avgScore?.toFixed(2) || '0.00'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                        children: "Mean Score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-2xl font-bold text-purple-600 dark:text-purple-400",
                                                                        children: analytics?.medianScore || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                        children: "Median Score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-2xl font-bold text-orange-600 dark:text-orange-400",
                                                                        children: analytics?.modeScore || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                                        children: "Mode Score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100",
                                                                        children: "Score Distribution"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: analytics?.scoreDistribution && Object.keys(analytics.scoreDistribution).length > 0 ? Object.entries(analytics.scoreDistribution).map(([range, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm w-12 text-zinc-600 dark:text-zinc-400",
                                                                                        children: range
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                        lineNumber: 458,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "bg-blue-500 h-2 rounded-full",
                                                                                            style: {
                                                                                                width: `${count / (analytics.totalInterviews || 1) * 100}%`
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                            lineNumber: 462,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                        lineNumber: 461,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm w-8 text-zinc-600 dark:text-zinc-400",
                                                                                        children: count
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                        lineNumber: 467,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, range, true, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 457,
                                                                                columnNumber: 33
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-zinc-500 dark:text-zinc-500 text-sm",
                                                                            children: "No data available yet"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 454,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100",
                                                                        children: "Percentile Breakdown"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm space-y-1 text-zinc-600 dark:text-zinc-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "90-100%: Excellent candidates"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "80-89%: Strong candidates"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 484,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "60-79%: Good candidates"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 485,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "40-59%: Average candidates"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 486,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Phi$2d$Chi$2d$Theta$2d$Zeta$2d$Gamma$2d$Interview$2d$Project$2f$apps$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: "<40%: Needs improvement"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                                lineNumber: 487,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Phi-Chi-Theta-Zeta-Gamma-Interview-Project/apps/frontend/src/app/dashboard/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Phi-Chi-Theta-Zeta-Gamma-Interview-Project_apps_frontend_src_d6319925._.js.map