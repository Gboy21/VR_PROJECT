import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { UserSidebar } from './components/user/UserSidebar';
import { Resources } from './pages/Resources';
import { ProfileSettings } from './pages/ProfileSettings';
import { HelpSupport } from './pages/HelpSupport';
import { StartInterview } from './pages/StartInterview';
import { InterviewSession } from './pages/InterviewSession';
import { InterviewFeedback } from './pages/InterviewFeedback';
import { PerformanceSummary } from './pages/PerformanceSummary';
import { ViewFeedback } from './pages/ViewFeedback';
import { Progress } from './pages/Progress';
import { QuickAccess } from './components/user/QuickAccess';
import { Recommendations } from './components/user/Recommendations';
import { ProgressStats } from './components/user/ProgressStats';

const Dashboard = () => (
  <div className="p-6 space-y-6">
    <QuickAccess />
    <ProgressStats />
    <Recommendations />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <UserSidebar />
        <Header />
        
        <main className="ml-64 pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/settings" element={<ProfileSettings />} />
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/start-interview" element={<StartInterview />} />
            <Route path="/session/:id" element={<InterviewSession />} />
            <Route path="/feedback/:id" element={<InterviewFeedback />} />
            <Route path="/performance-summary" element={<PerformanceSummary />} />
            <Route path="/feedback" element={<ViewFeedback />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;