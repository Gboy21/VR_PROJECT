import React from 'react';
import { MessageSquare, Star, Calendar } from 'lucide-react';

const feedbackData = [
  {
    id: 1,
    scenario: 'Technical Interview: React Development',
    date: '2024-03-15',
    rating: 4,
    strengths: ['Technical knowledge', 'Problem-solving approach'],
    improvements: ['Communication clarity', 'Time management'],
    feedback: 'Good understanding of React concepts. Consider explaining your thought process more clearly.',
  },
  {
    id: 2,
    scenario: 'Behavioral Interview: Leadership',
    date: '2024-03-10',
    rating: 5,
    strengths: ['Structured responses', 'Relevant examples'],
    improvements: ['Be more concise'],
    feedback: 'Excellent use of the STAR method. Stories were relevant and well-structured.',
  },
];

export const ViewFeedback = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-indigo-500" />
        <h1 className="text-2xl font-semibold">Interview Feedback</h1>
      </div>

      <div className="space-y-6">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{feedback.scenario}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(feedback.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < feedback.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {feedback.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Areas for Improvement</h3>
                <div className="flex flex-wrap gap-2">
                  {feedback.improvements.map((improvement, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm"
                    >
                      {improvement}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Detailed Feedback</h3>
                <p className="text-gray-600 dark:text-gray-400">{feedback.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};