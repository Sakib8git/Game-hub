// src/Pages/GameDetails.jsx
import { useLoaderData, useParams, Link } from "react-router";

export default function GameDetails() {
  const games = useLoaderData();
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-2xl">Game not found!</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      {/* Top spacing so it doesn't stick to navbar */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cover Photo / Banner */}
          <div className="lg:w-1/2">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Primary info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
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
          </div>
        </div>

        {/* Separate Description section (long form) */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed">
            {game.longDescription
              ? game.longDescription
              : "More detailed description will be available soon."}
          </p>
        </div>
      </div>
    </section>
  );
}