import { Link, NavLink } from "react-router";
import { LogOut, Home, Trophy, User } from "lucide-react";

export default function Navbar() {
  const user = null; // এখানে AuthContext থেকে user আসবে

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-400 transition"
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
              ? "text-purple-600 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-400 transition"
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
              ? "text-purple-600 font-semibold flex items-center space-x-1"
              : "flex items-center space-x-1 hover:text-purple-400 transition"
          }
        >
          <User className="w-4 h-4" />
          <span>Profile</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
            {/* ❌ Login/Register removed from dropdown */}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Gamehub
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-white"
            >
              Login
            </Link>
            {/* <Link
              to="/register"
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition text-white"
            >
              Register
            </Link> */}
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
  );
}