import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function TopNav() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/signin");
  }

  // Pages where we ONLY want to show logo
  const simplePages = ["/", "/signin", "/signup"];
  const simpleMode = simplePages.includes(location.pathname);

  return (
    <div className="w-full border-b bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gray-900">
          CareerLog
        </Link>

        {!simpleMode && (
          <div>
            {user ? (
              <div className="flex gap-4 items-center">
                <Link
                  to="/applications/new"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                >
                  + New Application
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link className="text-sm underline" to="/signin">
                  Sign In
                </Link>
                <Link className="text-sm underline" to="/signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
