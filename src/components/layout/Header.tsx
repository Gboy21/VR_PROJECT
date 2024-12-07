import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { NotificationPopover } from '../notifications/NotificationPopover';

export const Header = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 fixed top-0 right-0 left-64 bg-white dark:bg-gray-800 border-b dark:border-gray-700 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        
        <div className="flex items-center gap-4">
          <NotificationPopover />
          
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="h-8 w-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@vrinterview.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};