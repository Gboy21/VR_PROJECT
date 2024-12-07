import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, MessageSquare, Trophy, Clock } from 'lucide-react';

const QuickActionCard = ({ icon: Icon, title, description, onClick, primary = false }: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
  primary?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`p-6 rounded-lg shadow-md text-left w-full ${
      primary
        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
        : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
    }`}
  >
    <Icon className={`h-8 w-8 mb-3 ${primary ? 'text-indigo-200' : 'text-indigo-500'}`} />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className={`text-sm ${primary ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
      {description}
    </p>
  </button>
);

export const QuickAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <QuickActionCard
        icon={Play}
        title="Start Interview"
        description="Begin your next practice session"
        onClick={() => navigate('/start-interview')}
        primary
      />
      <QuickActionCard
        icon={MessageSquare}
        title="View Feedback"
        description="Review your past performance"
        onClick={() => navigate('/feedback')}
      />
      <QuickActionCard
        icon={Trophy}
        title="Progress"
        description="Track your improvement"
        onClick={() => navigate('/progress')}
      />
      <QuickActionCard
        icon={Clock}
        title="Recent Sessions"
        description="Continue where you left off"
        onClick={() => navigate('/start-interview')}
      />
    </div>
  );
};