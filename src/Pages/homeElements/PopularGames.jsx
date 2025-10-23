import { useLoaderData, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { motion } from "framer-motion";

export default function PopularGames() {
  const games = useLoaderData();
  // console.log(games);
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const topGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);
  // console.log(topGames);
  // ---------------------------------------
  const handleClick = (id) => {
    if (!user) {
      navigate("/login", { state: { from: `/games/${id}` } });
    } else {
      navigate(`/games/${id}`);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <title>Game-Hub Home</title>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          🎮 Popular Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topGames.map((game) => (
            <motion.div
              key={game.id}
              onClick={() => handleClick(game.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                         cursor-pointer border border-purple-700/40"
            >
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 text-white">
                <h3 className="text-2xl font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                  {game.description}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">
                    {game.category}
                  </span>
                  <span className="font-bold text-yellow-400">
                    ⭐ {game.ratings}
                  </span>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  Developer: {game.developer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
