import React from 'react';
import { Star, ThumbsUp, AlertCircle } from 'lucide-react';

type MetricProps = {
  category: string;
  score: number;
  maxScore: number;
  feedback: string;
};

export const FeedbackMetric = ({ category, score, maxScore, feedback }: MetricProps) => {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{category}</h3>
        <div className="flex items-center gap-1">
          {[...Array(maxScore)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < score
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{feedback}</p>
    </div>
  );
};