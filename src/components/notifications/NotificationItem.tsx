import React from 'react';
import { LucideIcon } from 'lucide-react';

type NotificationItemProps = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  time: string;
  onClick: () => void;
};

export const NotificationItem = ({
  icon: Icon,
  iconColor,
  title,
  description,
  time,
  onClick,
}: NotificationItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-left flex items-start gap-3"
    >
      <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-600 ${iconColor}`}>
        <Icon className="h-4 w-4" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {description}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{time}</p>
      </div>
    </button>
  );
};