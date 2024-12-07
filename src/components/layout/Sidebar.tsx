import React from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  BarChart2,
  Timer,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard Overview' },
  { icon: Users, label: 'User Management' },
  { icon: BookOpen, label: 'Scenario Management' },
  { icon: FileText, label: 'Resource Management' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Timer, label: 'Progress Monitoring' },
  { icon: Settings, label: 'Profile Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold">VR Interview Admin</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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