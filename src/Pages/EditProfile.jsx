import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
export default function EditProfile() {
  const { user, updateUserProfile, refreshNavUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // -------------
    updateUserProfile({ displayName: name, photoURL })
      .then(() => {
        const updatedUser = { ...user, displayName: name, photoURL };
        refreshNavUser(updatedUser);

        toast.success("Profile updated successfully!");
        navigate("/profile"), 1000;
      })
      .catch((error) => {
        toast.error("Failed to update profile.");
        console.error(error.code);
      });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <title>Edit Profile</title>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter photo URL"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                         hover:from-purple-700 hover:to-pink-700 rounded-md 
                         font-semibold text-white transition"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
