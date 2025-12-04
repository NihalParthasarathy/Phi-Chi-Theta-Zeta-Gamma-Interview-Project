"use client";

import { useState, useEffect } from "react";
import { useAuth } from '@/contexts/AuthContext';
import { api, InterviewEvaluation, ScheduledInterview, Analytics } from '@/lib/api';


export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [notes, setNotes] = useState<InterviewEvaluation[]>([]);
  const [schedule, setSchedule] = useState<ScheduledInterview[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'evaluation' | 'schedule' | 'notes' | 'analytics'>('evaluation');

  // Form state for new evaluation
  const [formData, setFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    interviewerName: user?.user_metadata?.full_name || '',
    interviewerEmail: user?.email || '',
    score: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setDataLoading(true);
        const [evaluationsData, scheduleData, analyticsData] = await Promise.all([
          api.getEvaluations(),
          api.getSchedule(),
          api.getAnalytics()
        ]);

        setNotes(evaluationsData);
        setSchedule(scheduleData);
        setAnalytics(analyticsData);
      } catch (error) {
        console.error('Error loading data:', error);
        // Set empty defaults on error
        setNotes([]);
        setSchedule([]);
        setAnalytics({ totalInterviews: 0, avgScore: 0, scoreDistribution: {}, medianScore: 0, modeScore: 0 });
      } finally {
        setDataLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Submit evaluation to API
      await api.submitEvaluation(formData);

      // Refresh evaluations and analytics after successful submission
      const [newEvaluations, newAnalytics] = await Promise.all([
        api.getEvaluations(),
        api.getAnalytics()
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
        notes: '',
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-zinc-950' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Header */}
      <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
            Rush Interview Scoring System
          </h1>
          <div className="flex items-center gap-4">
            {/* Rush Team Access Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Rush Team Access</span>
              <button
                onClick={() => {
                  // In a real app, this would redirect to admin panel
                  window.open('/admin', '_blank');
                }}
                className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none bg-blue-600"
              >
                <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs transform translate-x-8">
                  👥
                </div>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none"
              style={{ backgroundColor: darkMode ? '#3b82f6' : '#e5e7eb' }}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
                  darkMode ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                {darkMode ? '🌙' : '☀️'}
              </div>
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {user?.user_metadata?.full_name || user?.email}
              </span>
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                Rush Team
              </span>
              <button
                onClick={signOut}
                className="text-sm px-3 py-1 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <nav className="space-y-2">
                {[
                  { id: 'evaluation', label: 'Interview Evaluation', icon: '📝' },
                  { id: 'schedule', label: 'Interview Schedule', icon: '📅' },
                  { id: 'notes', label: 'Past Notes', icon: '📋' },
                  { id: 'analytics', label: 'Rush Analytics', icon: '📊' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-8">
              {activeTab === 'evaluation' && (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                    Interview Evaluation Form
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Fill out this form after completing an interview
                  </p>

                  {success ? (
                    <div className="text-center py-8">
                      <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                        Evaluation Submitted! 🎉
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                        Thanks for submitting your feedback!
                      </p>
                      <button
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        onClick={() => setSuccess(false)}
                      >
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Interviewer Name *
                          </label>
                          <input
                            type="text"
                            value={formData.interviewerName}
                            onChange={(e) => setFormData({...formData, interviewerName: e.target.value})}
                            placeholder="Your full name"
                            className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Interviewer Email *
                          </label>
                          <input
                            type="email"
                            value={formData.interviewerEmail}
                            onChange={(e) => setFormData({...formData, interviewerEmail: e.target.value})}
                            placeholder="your.email@example.com"
                            className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Candidate Name *
                          </label>
                          <input
                            type="text"
                            value={formData.candidateName}
                            onChange={(e) => setFormData({...formData, candidateName: e.target.value})}
                            placeholder="Candidate's full name"
                            className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                            Candidate Email *
                          </label>
                          <input
                            type="email"
                            value={formData.candidateEmail}
                            onChange={(e) => setFormData({...formData, candidateEmail: e.target.value})}
                            placeholder="candidate.email@example.com"
                            className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Score (1-10) *
                        </label>
                        <select
                          value={formData.score}
                          onChange={(e) => setFormData({...formData, score: e.target.value})}
                          className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a score</option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Notes / Comments
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          placeholder="Write your feedback and observations..."
                          rows={5}
                          className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                      </div>

                      {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Submitting...' : 'Submit Evaluation'}
                      </button>
                    </form>
                  )}
                </>
              )}

              {activeTab === 'schedule' && (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                    Interview Schedule
                  </h2>
                  {dataLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-zinc-600 dark:text-zinc-400">Loading schedule...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {schedule.length > 0 ? schedule.map((interview) => (
                        <div key={interview.id} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                                {interview.candidate_name}
                              </h3>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {interview.candidate_email}
                              </p>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Interviewer: {interview.interviewer_name}
                              </p>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {new Date(interview.scheduled_time).toLocaleString()}
                              </p>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded ${
                              interview.status === 'scheduled'
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                : interview.status === 'completed'
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            }`}>
                              {interview.status}
                            </span>
                          </div>
                        </div>
                      )) : (
                        <p className="text-zinc-500 dark:text-zinc-500 text-center py-8">No scheduled interviews found</p>
                      )}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'notes' && (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                    Past Interview Notes
                  </h2>
                  {dataLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-zinc-600 dark:text-zinc-400">Loading notes...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {notes.length > 0 ? notes.map((note) => (
                        <div key={note.id} className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                              {note.candidate_name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {note.score && (
                                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                                  Score: {note.score}/10
                                </span>
                              )}
                              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                                {new Date(note.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                            Interviewer: {note.interviewer_name}
                          </p>
                          <p className="text-zinc-700 dark:text-zinc-300">
                            {note.notes}
                          </p>
                        </div>
                      )) : (
                        <p className="text-zinc-500 dark:text-zinc-500 text-center py-8">No interview notes found</p>
                      )}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'analytics' && (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-100">
                    Rush Interview Analytics
                  </h2>
                  {dataLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-zinc-600 dark:text-zinc-400">Loading analytics...</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        Dashboard showing statistics from {analytics?.totalInterviews || 0} completed interviews
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {analytics?.totalInterviews || 0}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Total Interviews</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {analytics?.avgScore?.toFixed(2) || '0.00'}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Mean Score</p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {analytics?.medianScore || 0}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Median Score</p>
                        </div>
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                            {analytics?.modeScore || 0}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Mode Score</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
                            Score Distribution
                          </h3>
                          <div className="space-y-2">
                            {analytics?.scoreDistribution && Object.keys(analytics.scoreDistribution).length > 0 ? (
                              Object.entries(analytics.scoreDistribution).map(([range, count]) => (
                                <div key={range} className="flex items-center gap-3">
                                  <span className="text-sm w-12 text-zinc-600 dark:text-zinc-400">
                                    {range}
                                  </span>
                                  <div className="flex-1 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: `${((count / (analytics.totalInterviews || 1)) * 100)}%` }}
                                    />
                                  </div>
                                  <span className="text-sm w-8 text-zinc-600 dark:text-zinc-400">
                                    {count}
                                  </span>
                                </div>
                              ))
                            ) : (
                              <p className="text-zinc-500 dark:text-zinc-500 text-sm">No data available yet</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
                            Percentile Breakdown
                          </h3>
                          <div className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                            <p>90-100%: Excellent candidates</p>
                            <p>80-89%: Strong candidates</p>
                            <p>60-79%: Good candidates</p>
                            <p>40-59%: Average candidates</p>
                            <p>&lt;40%: Needs improvement</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}