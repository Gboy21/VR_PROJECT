import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info } from 'lucide-react';

export const PerformanceSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const performanceData = location.state || {
    scenario: 'No Data Available',
    attemptedQuestions: 0,
    correctAnswers: 0,
    accuracy: '0%',
    feedback: ['No feedback available.'],
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold">Performance Summary</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's how you performed in the interview session.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{performanceData.scenario}</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Questions Attempted:</span>
            <span>{performanceData.attemptedQuestions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Correct Answers:</span>
            <span>{performanceData.correctAnswers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Accuracy:</span>
            <span className="text-indigo-600 font-semibold">{performanceData.accuracy}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Recommendations</h3>
        <ul className="space-y-3">
          {performanceData.feedback.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <CheckCircle className="h-5 w-5" />
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
