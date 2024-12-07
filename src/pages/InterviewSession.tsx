import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Target, CheckCircle } from 'lucide-react';

// Mock data for scenarios
const scenarios = [
  {
    id: 1,
    title: 'Technical Interview: React Development',
    duration: '45 mins',
    difficulty: 'Intermediate',
    questions: [
      'What are React hooks, and how are they used?',
      'Explain the differences between state and props.',
      'How would you optimize the performance of a React application?',
    ],
  },
  {
    id: 2,
    title: 'Behavioral Interview: Leadership',
    duration: '30 mins',
    difficulty: 'Advanced',
    questions: [
      'Describe a time when you resolved a team conflict.',
      'How do you prioritize tasks when managing a team?',
      'What is your approach to decision-making under pressure?',
    ],
  },
];

export const InterviewSession = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Find the scenario by ID
  const scenario = scenarios.find((s) => s.id === parseInt(id || '', 10));

  if (!scenario) {
    return (
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold mt-4">Scenario Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">
          The selected interview scenario does not exist. Please go back and try again.
        </p>
      </div>
    );
  }

  const handleNextQuestion = () => {
    if (currentQuestion < scenario.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleComplete = () => {
    navigate(`/feedback/${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold">{scenario.title}</h1>
          <div className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-500" />
              {scenario.duration}
            </span>
            <span className="flex items-center gap-1">
              <Target className="h-4 w-4 text-indigo-500" />
              {scenario.difficulty}
            </span>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">
                Question {currentQuestion + 1} of {scenario.questions.length}
              </h2>
              <span className="text-sm text-gray-500">
                Time remaining: {scenario.duration}
              </span>
            </div>
            <p className="text-lg mb-6">{scenario.questions[currentQuestion]}</p>
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
              >
                {currentQuestion === scenario.questions.length - 1 ? 'Finish' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Interview Completed!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Great job! Click below to view your feedback and performance analysis.
          </p>
          <button
            onClick={handleComplete}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            View Feedback
          </button>
        </div>
      )}
    </div>
  );
};