import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router";

export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || ""); // 👈 Login থেকে আসা email দেখাবে

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        // ✅ Gmail নতুন ট্যাবে ওপেন হবে
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error("Failed to send reset email.");
        console.error(error.code);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleReset} className="card-body">
          <h2 className="text-2xl font-bold text-center">Reset Password</h2>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary mt-4">Reset Password</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}