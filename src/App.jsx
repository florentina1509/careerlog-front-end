import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { ToastProvider } from "./context/ToastProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import TopNav from "./components/TopNav";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NewApplication from "./pages/NewApplication";
import EditApplication from "./pages/EditApplication"; 

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <div className="flex flex-col min-h-screen">
          {/* Navigation bar */}
          <TopNav />

          {/* Page content */}
          <main className="flex-grow max-w-5xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/applications/new"
                element={
                  <ProtectedRoute>
                    <NewApplication />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/applications/:id/edit"
                element={
                  <ProtectedRoute>
                    <EditApplication />
                  </ProtectedRoute>
                }
              />
              {/* fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}
