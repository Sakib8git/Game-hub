import { Link } from "react-router";

export default function Login() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Right: Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div className="flex justify-between items-center mt-2">
                <Link
                  to="/auth/forgot-password"
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
            </p>
          </div>
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
    </div>
  );
}
