import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { user, ready } = useAuth();

  if (!ready) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
