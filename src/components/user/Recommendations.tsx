import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: 'Technical Interview: React Development',
    difficulty: 'Intermediate',
    duration: '45 mins',
    match: '95%',
  },
  {
    id: 2,
    title: 'Behavioral Interview: Leadership',
    difficulty: 'Advanced',
    duration: '30 mins',
    match: '88%',
  },
  {
    id: 3,
    title: 'System Design Discussion',
    difficulty: 'Advanced',
    duration: '60 mins',
    match: '82%',
  },
];

export const Recommendations = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-indigo-500" />
        <h2 className="text-xl font-semibold">Recommended for You</h2>
      </div>

      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="space-y-1">
              <h3 className="font-medium">{scenario.title}</h3>
              <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span>{scenario.difficulty}</span>
                <span>•</span>
                <span>{scenario.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-indigo-600 font-semibold">{scenario.match} match</span>
              <button
                onClick={() => navigate('/start-interview')}
                className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-600 rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
