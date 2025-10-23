// src/Pages/ErrorPage.jsx
import { use } from "react";
import { Link } from "react-router";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Provider/AuthContext";

export default function ErrorPage() {
   const {loading}= use(AuthContext)
    if (loading) {
      return (
        <div className="w-full flex justify-center items-center py-70 bg-gray-900">
          <HashLoader color="#8de6f3" />
        </div>
      );
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Error Code */}
      <title>Error-404</title>
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