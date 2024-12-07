import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, Target } from 'lucide-react';
import { NotificationItem } from './NotificationItem';
import { useNotifications } from '../../hooks/useNotifications';

export const NotificationList = () => {
  const navigate = useNavigate();
  const { notifications } = useNotifications();

  return (
    <div className="p-2">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
        <h3 className="text-sm font-medium px-2">Notifications</h3>
      </div>
      
      <div className="space-y-1">
        <NotificationItem
          icon={Clock}
          iconColor="text-yellow-500"
          title="Pending Interview"
          description="Technical Interview: React Development"
          time="Today, 2:00 PM"
          onClick={() => navigate('/start-interview')}
        />
        
        <NotificationItem
          icon={CheckCircle}
          iconColor="text-green-500"
          title="Interview Completed"
          description="System Design Discussion"
          time="Yesterday"
          onClick={() => navigate('/feedback/1')}
        />
        
        <NotificationItem
          icon={Target}
          iconColor="text-indigo-500"
          title="New Match Found"
          description="Behavioral Interview: Leadership"
          time="2 days ago"
          onClick={() => navigate('/start-interview')}
        />
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
        <button
          onClick={() => navigate('/notifications')}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 w-full text-center"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};