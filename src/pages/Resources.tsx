import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Interview Preparation Guide',
    type: 'Document',
    icon: FileText,
    description: 'Comprehensive guide for technical and behavioral interviews',
  },
  {
    id: 2,
    title: 'Body Language Tips',
    type: 'Video',
    icon: Video,
    description: 'Expert tips on maintaining professional body language',
  },
  {
    id: 3,
    title: 'Common Interview Questions',
    type: 'Document',
    icon: FileText,
    description: 'Collection of frequently asked interview questions',
  },
];

export const Resources = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="h-6 w-6 text-indigo-500" />
        <h1 className="text-2xl font-semibold">Resources</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <resource.icon className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
            <span className="text-sm text-indigo-600 dark:text-indigo-400">{resource.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};