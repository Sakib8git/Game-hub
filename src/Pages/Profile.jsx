// src/Pages/Profile.jsx
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";
import { HashLoader } from "react-spinners";

export default function Profile() {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-70 bg-gray-900">
        <HashLoader color="#8de6f3" />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-xl">You are not logged in.</h2>
      </div>
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error.code);
      });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <title>Your Profile</title>
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Profile Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
          <p className="text-sm text-gray-300 mb-4">{user.email}</p>

          <div className="flex justify-center gap-4 mt-6">
            {/* Edit Profile */}
            <button
              onClick={() => navigate("/my-profile")}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
             hover:from-purple-700 hover:to-pink-700 rounded-md 
             font-semibold transition"
            >
              Update  Profile
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md 
                         font-semibold transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
