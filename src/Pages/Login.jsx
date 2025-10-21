import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { signInWithEmail,signInWithGoogle  } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formTarget = e.target;

    const email = formTarget.email.value;
    const password = formTarget.password.value;
    signInWithEmail(email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
        toast.success("Login successful!");
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
        console.log("Google User:", result.user);
      })
      .catch((error) => {
        toast.error("Google login failed!");
        console.error(error.code);
      });
  };



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* Right: Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="input w-full pr-10"
                  name="password"
                  placeholder="Password"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <Link
                  to="/forgot-password"
                   state={{ email }}
                  className="link link-hover text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>

            {/* 👇 Extra line */}
            <p className="text-sm mt-3 text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="link link-primary">
                Register
              </Link>
              <div>
                <button onClick={handleGoogleLogin} type="button" className="btn w-full mt-3">
                  <FcGoogle size={24} />
                  Continue with Google
                </button>
              </div>
            </p>
          </form>
        </div>

        {/* Left: Text */}
        <div className="text-center lg:text-left lg:mr-10">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
