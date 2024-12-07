import { useState, useEffect } from 'react';

type Notification = {
  id: string;
  type: 'pending' | 'completed' | 'match';
  title: string;
  description: string;
  time: string;
  read: boolean;
};

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const mockNotifications: Notification[] = [
      {
        id: '1',
        type: 'pending',
        title: 'Pending Interview',
        description: 'Technical Interview: React Development',
        time: 'Today, 2:00 PM',
        read: false,
      },
      {
        id: '2',
        type: 'completed',
        title: 'Interview Completed',
        description: 'System Design Discussion',
        time: 'Yesterday',
        read: false,
      },
      {
        id: '3',
        type: 'match',
        title: 'New Match Found',
        description: 'Behavioral Interview: Leadership',
        time: '2 days ago',
        read: true,
      },
    ];

    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return {
    notifications,
    markAsRead,
    markAllAsRead,
    unreadCount: notifications.filter(n => !n.read).length,
  };
};