import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import ConsentPrompts from './components/issues/ConsentPrompts.jsx';
import { SocketProvider } from './context/SocketContext.jsx';

// Pages
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import CompleteProfile from './pages/auth/CompleteProfile';
import Dashboard from './pages/dashboard/Dashboard';
import PendingIssues from './pages/dashboard/PendingIssues';
import ResolvedIssues from './pages/dashboard/ResolvedIssues';
import AllIssues from './pages/dashboard/AllIssues';
import Analytics from './pages/dashboard/Analytics';
import Alerts from './pages/dashboard/Alerts';
import ReportIssue from './pages/issues/ReportIssue';
import MyIssues from './pages/issues/MyIssues';
import NotFound from './pages/errors/NotFound';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import Notifications from './pages/notifications/Notifications';

// Role-based route components
const CitizenRoute = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={['citizen']}>
      {children}
    </ProtectedRoute>
  );
};

const GovernmentRoute = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={['government']}>
      {children}
    </ProtectedRoute>
  );
};

const App = () => {
  // We'll remove the global Header since Home page has its own custom header
  // and the other layouts should handle their own headers
  return (
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <SocketProvider>
              <ConsentPrompts />
              <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* User account routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />

            {/* Complete Profile - Protected */}
            <Route
              path="/complete-profile"
              element={
                <ProtectedRoute>
                  <CompleteProfile />
                </ProtectedRoute>
              }
            />

            {/* Citizen Routes */}
            <Route
              path="/report-issue"
              element={
                <CitizenRoute>
                  <ReportIssue />
                </CitizenRoute>
              }
            />
            <Route
              path="/dashboard/my-issues"
              element={
                <CitizenRoute>
                  <MyIssues />
                </CitizenRoute>
              }
            />

            {/* Government Routes */}
            <Route
              path="/dashboard/all-issues"
              element={
                <GovernmentRoute>
                  <AllIssues />
                </GovernmentRoute>
              }
            />
            <Route
              path="/dashboard/pending-issues"
              element={
                <GovernmentRoute>
                  <PendingIssues />
                </GovernmentRoute>
              }
            />
            <Route
              path="/dashboard/resolved-issues"
              element={
                <GovernmentRoute>
                  <ResolvedIssues />
                </GovernmentRoute>
              }
            />
            <Route
              path="/dashboard/analytics"
              element={
                <GovernmentRoute>
                  <Analytics />
                </GovernmentRoute>
              }
            />
            <Route
              path="/dashboard/alerts"
              element={
                <GovernmentRoute>
                  <Alerts />
                </GovernmentRoute>
              }
            />

            {/* Error Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </SocketProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
