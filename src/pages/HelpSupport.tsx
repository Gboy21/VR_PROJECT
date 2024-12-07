import React from 'react';
import { HelpCircle, Mail, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I start a practice interview?',
    answer: 'Navigate to the dashboard and click on the "Start Interview" button. Choose your preferred scenario and follow the on-screen instructions.',
  },
  {
    question: 'Can I review my past interviews?',
    answer: 'Yes! Go to the "Progress" section to view all your past interviews, including feedback and performance metrics.',
  },
  {
    question: 'How can I improve my performance?',
    answer: 'Check out our Resources section for guides and tips. Also, regularly practice with different scenarios and review the feedback provided after each session.',
  },
];

export const HelpSupport = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-6 w-6 text-indigo-500" />
        <h1 className="text-2xl font-semibold">Help & Support</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b dark:border-gray-700 pb-4">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500" />
                <span>support@vrinterview.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-indigo-500" />
                <span>Live chat available 24/7</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  rows={4}
                  placeholder="Describe your issue..."
                />
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};