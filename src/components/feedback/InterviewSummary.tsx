import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

type Answer = {
  question: string;
  response: string;
  strength: 'strong' | 'moderate' | 'weak';
  feedback: string;
};

type Props = {
  answers: Answer[];
};

const AnswerStrengthIcon = ({ strength }: { strength: Answer['strength'] }) => {
  switch (strength) {
    case 'strong':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'moderate':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case 'weak':
      return <XCircle className="h-5 w-5 text-red-500" />;
  }
};

export const InterviewSummary = ({ answers }: Props) => {
  return (
    <div className="space-y-4">
      {answers.map((answer, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-start gap-3">
            <AnswerStrengthIcon strength={answer.strength} />
            <div className="flex-1">
              <h3 className="font-medium mb-2">{answer.question}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {answer.response}
              </p>
              <p className="text-sm border-l-2 border-indigo-500 pl-3">
                {answer.feedback}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};