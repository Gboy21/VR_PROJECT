
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { FeedbackMetric } from '../components/feedback/FeedbackMetrics';
import { BehavioralInsights } from '../components/feedback/BehavioralInsights';
import { InterviewSummary } from '../components/feedback/InterviewSummary';

const mockAnswers = [
  {
    question: 'Describe a challenging project you worked on.',
    response: `I led a team of 5 developers to rebuild our company's legacy system...`,
    strength: 'strong' as const,
    feedback: 'Excellent use of the STAR method with clear outcomes and learnings.',
  },
  {
    question: 'How do you handle conflicts in a team?',
    response: 'In my previous role, there was a disagreement about the technical approach...',
    strength: 'moderate' as const,
    feedback: 'Good example, but could provide more detail about the resolution process.',
  },
  {
    question: 'What are your career goals?',
    response: 'I want to grow into a technical leadership role...',
    strength: 'weak' as const,
    feedback: 'Consider providing more specific, measurable goals and timeline.',
  },
];

export const InterviewFeedback = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold">Interview Feedback</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Technical Interview: React Development
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download className="h-5 w-5" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Share2 className="h-5 w-5" />
            Share
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <FeedbackMetric
          category="Technical Knowledge"
          score={4}
          maxScore={5}
          feedback="Strong understanding of React concepts and best practices."
        />
        <FeedbackMetric
          category="Communication"
          score={3}
          maxScore={5}
          feedback="Clear explanations, but could improve technical terminology usage."
        />
        <FeedbackMetric
          category="Problem Solving"
          score={4}
          maxScore={5}
          feedback="Excellent analytical approach with structured solutions."
        />
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Behavioral Insights</h2>
          <BehavioralInsights />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Detailed Response Analysis</h2>
          <InterviewSummary answers={mockAnswers} />
        </section>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate('/start-interview')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Practice Again
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};