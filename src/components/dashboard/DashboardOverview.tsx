import React from 'react';
import { Users, BookOpen, TrendingUp, Plus, MessageSquare } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }: { title: string; value: string | number; icon: React.ElementType }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-indigo-500" />
    </div>
  </div>
);

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Users" value="2,451" icon={Users} />
        <StatCard title="Available Scenarios" value="124" icon={BookOpen} />
        <StatCard title="New Users (This Week)" value="156" icon={TrendingUp} />
        <StatCard title="Pending Feedback" value="28" icon={MessageSquare} />
      </div>
      
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          Add New Scenario
        </button>
        <button className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
          <MessageSquare className="h-5 w-5" />
          View Feedback
        </button>
      </div>
    </div>
  );
};