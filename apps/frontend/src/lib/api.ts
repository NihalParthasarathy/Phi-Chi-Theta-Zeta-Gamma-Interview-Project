import { supabase } from './supabaseClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export interface EvaluationData {
  candidateName: string;
  candidateEmail: string;
  interviewerName: string;
  interviewerEmail: string;
  score: string;
  notes: string;
}

export interface InterviewEvaluation {
  id: string;
  candidate_name: string;
  candidate_email: string;
  interviewer_name: string;
  interviewer_email: string;
  score?: number;
  notes?: string;
  created_at: string;
}

export interface ScheduledInterview {
  id: string;
  candidate_name: string;
  candidate_email: string;
  interviewer_name: string;
  scheduled_time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Analytics {
  totalInterviews: number;
  avgScore: number;
  scoreDistribution: Record<string, number>;
  medianScore: number;
  modeScore: number;
}

// Helper function to get auth headers
const getAuthHeaders = async () => {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error('No authentication token available');
  }

  return {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json',
  };
};

export const api = {
  // Submit interview evaluation
  submitEvaluation: async (data: EvaluationData) => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_BASE_URL}/api/evaluations`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit evaluation');
    }

    return await response.json();
  },

  // Get all evaluations
  getEvaluations: async (): Promise<InterviewEvaluation[]> => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_BASE_URL}/api/evaluations`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch evaluations');
    }

    return await response.json();
  },

  // Get interview schedule
  getSchedule: async (): Promise<ScheduledInterview[]> => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_BASE_URL}/api/schedule`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch schedule');
    }

    return await response.json();
  },

  // Get analytics
  getAnalytics: async (): Promise<Analytics> => {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_BASE_URL}/api/analytics`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch analytics');
    }

    return await response.json();
  },
};