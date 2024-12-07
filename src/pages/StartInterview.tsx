import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, Target, ArrowLeft } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: 'Technical Interview: React Development',
    duration: '45 mins',
    difficulty: 'Intermediate',
    topics: ['React Hooks', 'State Management', 'Performance Optimization'],
  },
  {
    id: 2,
    title: 'Behavioral Interview: Leadership',
    duration: '30 mins',
    difficulty: 'Advanced',
    topics: ['Team Management', 'Conflict Resolution', 'Decision Making'],
  },
];

export const StartInterview = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold">Start Interview</h1>
          <p className="text-gray-600 dark:text-gray-400">Choose a scenario to begin your practice session</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{scenario.title}</h2>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>{scenario.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Target className="h-4 w-4 text-indigo-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{scenario.difficulty}</span>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Topics Covered:</h3>
              <div className="flex flex-wrap gap-2">
                {scenario.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate(`/session/${scenario.id}`)}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              <Play className="h-5 w-5" />
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
