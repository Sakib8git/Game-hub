import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

export default function Register() {
  const { user, createWithEmail } = useContext(AuthContext);

  const [show, setShow] = useState(false);

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
        toast.success("Registration successful!");
        console.log(result);
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* Right: Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Full Name"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}   // ✅ toggle type
                  name="password"
                  className="input w-full pr-10"      // ✅ padding-right for icon
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Submit */}
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>

            {/* Extra line */}
            <p className="text-sm mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Left: Text */}
        <div className="text-center lg:text-left lg:mr-10">
          <h1 className="text-5xl font-bold">Create your account</h1>
          <p className="py-6">
            Sign up with your email and password, add your name and profile
            photo, and start exploring Gamehub with your personalized account.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}