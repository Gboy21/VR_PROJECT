import React from 'react';
import { Settings, User, Bell, Shield } from 'lucide-react';

export const ProfileSettings = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-indigo-500" />
        <h1 className="text-2xl font-semibold">Profile Settings</h1>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <User className="h-5 w-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Personal Information</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <Bell className="h-5 w-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-5 w-5 text-indigo-500" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};