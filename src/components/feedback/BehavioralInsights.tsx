import React from 'react';
import { Eye, Mic, Clock, Brain } from 'lucide-react';

type Insight = {
  icon: React.ElementType;
  title: string;
  observation: string;
  suggestion: string;
};

const insights: Insight[] = [
  {
    icon: Eye,
    title: 'Eye Contact',
    observation: 'Maintained consistent eye contact',
    suggestion: 'Try to balance between direct eye contact and natural breaks',
  },
  {
    icon: Mic,
    title: 'Voice Clarity',
    observation: 'Clear and well-paced speech',
    suggestion: 'Consider varying tone for emphasis on key points',
  },
  {
    icon: Clock,
    title: 'Response Timing',
    observation: 'Good response length',
    suggestion: 'Aim for 2-3 minute responses for behavioral questions',
  },
  {
    icon: Brain,
    title: 'Critical Thinking',
    observation: 'Structured problem-solving approach',
    suggestion: 'Continue using the STAR method for responses',
  },
];

export const BehavioralInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {insights.map((insight, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <insight.icon className="h-5 w-5 text-indigo-500" />
            <h3 className="font-medium">{insight.title}</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-green-500 font-medium">Observation: </span>
              {insight.observation}
            </p>
            <p className="text-sm">
              <span className="text-indigo-500 font-medium">Suggestion: </span>
              {insight.suggestion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};