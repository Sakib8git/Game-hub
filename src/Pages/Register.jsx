import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { updateProfile } from "firebase/auth"; // ✅ added

export default function Register() {
  const { createWithEmail, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // ✅ Password Validation Function
  const validatePassword = (password) => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return false;
    }
    return true;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const formTarget = e.target;
    const displayName = formTarget.name.value;
    const photoURL = formTarget.photo.value;
    const email = formTarget.email.value;
    const password = formTarget.password.value;

    if (!validatePassword(password)) {
      return;
    }

    createWithEmail(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ Update profile with name and photo
        updateProfile(user, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success("Registration successful!");
            logOut().then(() => navigate("/login"));
          })
          .catch((error) => {
            toast.error("Profile update failed.");
            console.error(error.code);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please try logging in.");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        console.log(errorCode);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create your <span className="text-purple-400">Gamehub</span> account
        </h1>

        {/* Form */}
        <form onSubmit={handleRegistration} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Photo URL"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700 rounded-md 
                       font-semibold text-white transition"
          >
            Register
          </button>
        </form>

        {/* Extra line */}
        <p className="text-sm mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:text-pink-400">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}