// src/Pages/HomeElements/PopularGames.jsx
import { useLoaderData, Link } from "react-router";

export default function PopularGames() {
  const games = useLoaderData();

  // ✅ rating অনুযায়ী sort করে শীর্ষ ৩টা নিলাম
  const topGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          🎮 Popular Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topGames.map((game) => (
            <Link
              to={`/games/${game.id}`}
              key={game.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                         hover:scale-105 transform transition duration-300"
            >
              {/* Cover Photo */}
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-56 object-cover"
              />

              {/* Card Content */}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}