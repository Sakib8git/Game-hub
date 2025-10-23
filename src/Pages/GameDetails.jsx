import { useLoaderData, useParams, Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { use } from "react";
import { HashLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function GameDetails() {
  const { loading } = use(AuthContext);
  const games = useLoaderData();
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  // game na thakle pabe na
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-2xl">Game not found!</h2>
      </div>
    );
  }
  // load--------------
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-70 bg-gray-900">
        <HashLoader color="#8de6f3" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <title>{game.title}</title>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-gray-300 mb-6">{game.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-purple-600 px-4 py-1 rounded-full text-sm">
                {game.category}
              </span>
              <span className="text-yellow-400 font-semibold">
                ⭐ {game.ratings}
              </span>
              <span className="text-gray-400">👨‍💻 {game.developer}</span>
            </div>

            <div className="flex gap-4">
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                           hover:from-purple-700 hover:to-pink-700 rounded-md 
                           font-semibold transition"
              >
                Download Now
              </a>
              <Link
                to="/games"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md font-semibold transition"
              >
                Back to All Games
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-gray-700 pt-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed">{game.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
