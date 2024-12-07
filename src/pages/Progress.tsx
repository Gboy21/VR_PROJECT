import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trophy, Target, TrendingUp } from 'lucide-react';

const performanceData = [
  { date: '2024-03-01', score: 75 },
  { date: '2024-03-05', score: 82 },
  { date: '2024-03-10', score: 78 },
  { date: '2024-03-15', score: 88 },
];

const scenarioCompletion = [
  { name: 'Technical', completed: 8 },
  { name: 'Behavioral', completed: 5 },
  { name: 'System Design', completed: 3 },
];

export const Progress = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-indigo-500" />
        <h1 className="text-2xl font-semibold">Your Progress</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Performance Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip
                  labelFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6366f1"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Scenarios Completed</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarioCompletion}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <Trophy className="h-8 w-8 text-indigo-500" />
              <div>
                <h3 className="font-medium">Quick Learner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed 5 interviews in a week</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <Target className="h-8 w-8 text-indigo-500" />
              <div>
                <h3 className="font-medium">Perfect Score</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Achieved 100% in technical interview</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <TrendingUp className="h-8 w-8 text-indigo-500" />
              <div>
                <h3 className="font-medium">Consistent Growth</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Improved scores for 3 weeks straight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};