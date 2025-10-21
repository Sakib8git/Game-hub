import { Link } from "react-router";

export default function Register() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Right: Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Full Name" required />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" required />

              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Profile Photo URL" />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" required />

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
          </div>
        </div>

        {/* Left: Text */}
        <div className="text-center lg:text-left lg:mr-10">
          <h1 className="text-5xl font-bold">Create your account</h1>
          <p className="py-6">
            Sign up with your email and password, add your name and profile photo,  
            and start exploring Gamehub with your personalized account.
          </p>
        </div>
      </div>
    </div>
  );
}