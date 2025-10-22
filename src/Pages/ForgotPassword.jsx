import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router";

export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error("Failed to send reset email.");
        console.error(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <title>Forget Passwors!</title>
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Reset <span className="text-purple-400">Password</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white 
                         placeholder-gray-200 focus:outline-none focus:ring-2 
                         focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700 rounded-md 
                       font-semibold text-white transition"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}