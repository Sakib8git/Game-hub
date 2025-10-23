import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";


export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
const from = location.state?.from || "/";

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const formTarget = e.target;

    const email = formTarget.email.value;
    const password = formTarget.password.value;
    signInWithEmail(email, password)
      .then((result) => {
        toast.success("Login successful!");
        // console.log("Logged in:", result.user);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-credential") {
          toast.error("Invalid email or password. Please try again.");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Try again.");
        } else {
          toast.error("Login failed. Please try again.");
        }
        console.log(error.code);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Logged in with Google!");

        // console.log("Google User:", result.user);
        navigate(from);
      })
      .catch((error) => {
        toast.error("Google login failed!");
        console.error(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <title>Login</title>
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login to <span className="text-purple-400">Gamehub</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-400"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-purple-400 hover:text-pink-400"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700 rounded-md 
                       font-semibold text-white transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 
                     bg-gray-700 hover:bg-gray-600 rounded-md text-white transition"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-400 hover:text-pink-400">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
