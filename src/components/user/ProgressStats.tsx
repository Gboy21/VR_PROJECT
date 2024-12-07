import React from 'react';
import { Award, Target, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4">
    <div className="p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg">
      <Icon className="h-6 w-6 text-indigo-500" />
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  </div>
);

export const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        icon={Target}
        label="Scenarios Completed"
        value="12"
      />
      <StatCard
        icon={Award}
        label="Badges Earned"
        value="5"
      />
      <StatCard
        icon={Clock}
        label="Practice Hours"
        value="24"
      />
    </div>
  );
};