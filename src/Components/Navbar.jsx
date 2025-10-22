import { Link, NavLink } from "react-router";
import { LogOut, Home, Trophy, User } from "lucide-react";
import logo from "../assets/gamepad.png";

export default function Navbar() {
  const user = null;

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-300 transition"
          }
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-300 transition"
          }
        >
          <Trophy className="w-4 h-4" />
          <span>All Games</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-300 transition"
          }
        >
          <User className="w-4 h-4" />
          <span>Profile</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Dropdown + Logo */}
        <div className="flex items-center gap-4">
          {/* ✅ Dropdown left of logo */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-sm btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black z-50"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-white">Ga</span>
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-white">mehub</span>
          </Link>
        </div>

        {/* Right side: Nav links (lg only) + Auth buttons */}
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6">{navLinks}</ul>

          {!user ? (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-purple-400 cursor-pointer hover:border-pink-400 transition"
              />
              <button className="hover:text-red-400 transition">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}