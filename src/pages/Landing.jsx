import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust if needed

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-white px-6 pt-16">
      {/* Logo */}
      <img
        src={logo}
        alt="CareerLog"
        className="w-56 md:w-64 mb-6 drop-shadow-lg"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
        Welcome to CareerLog
      </h1>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
