// src/Pages/AllGames.jsx
import { useLoaderData, Link } from "react-router";

export default function AllGames() {
  const games = useLoaderData();

  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          🎮 All Games
        </h2>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                         hover:scale-105 transform transition duration-300 
                         border border-purple-700/40 flex flex-col"
            >
              {/* Cover Photo */}
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5 text-white flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {game.description}
                </p>

                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">
                    {game.category}
                  </span>
                  <span className="font-bold text-yellow-400">
                    ⭐ {game.ratings}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-4">
                  Developer: {game.developer}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex justify-between items-center">
                  <Link
                    to={`/games/${game.id}`}
                    className="text-purple-400 hover:text-pink-400 text-sm font-semibold"
                  >
                    View Details
                  </Link>
                  <a
                    href={game.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                               hover:from-purple-700 hover:to-pink-700 rounded-md 
                               text-sm font-semibold transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}