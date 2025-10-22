// src/Pages/ErrorPage.jsx
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-purple-600 tracking-widest">
        404
      </h1>

      {/* Message */}
      <div className="bg-gray-800 px-6 py-4 rounded-md shadow-lg mt-6 text-center max-w-md">
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                     hover:from-purple-700 hover:to-pink-700 rounded-md 
                     font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}