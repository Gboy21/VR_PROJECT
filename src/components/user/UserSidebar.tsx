import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Settings,
  BookOpen,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Resources', path: '/resources' },
  { icon: Settings, label: 'Profile Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/help' },
];

export const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold">VR Interview Prep</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
        
        <button className="w-full flex items-center gap-3 px-6 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 mt-6">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  );
};