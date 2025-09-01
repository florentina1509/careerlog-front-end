import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Logo */}
      <img src={logo} alt="CareerLog" className="w-40 mb-8 drop-shadow-md" />

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Welcome to CareerLog
      </h1>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
