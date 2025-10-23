import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

export default function Leaderboard() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  //!if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", { state: { from: "/leaderboard" } });
    }
  }, [user, loading, navigate]);

  const players = [
    { name: "Nazmus", rating: 4.9 },
    { name: "Sakib", rating: 4.8 },
    { name: "Anik", rating: 4.7 },
    { name: "Rafi", rating: 4.6 },
    { name: "Tanjim", rating: 4.5 },
    { name: "Mehedi", rating: 4.4 },
    { name: "Fahim", rating: 4.3 },
    { name: "Nayeem", rating: 4.2 },
    { name: "Ratul", rating: 4.1 },
    { name: "Shuvo", rating: 4.0 },
  ];
  // load---------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <p className="text-lg">Checking access...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <title>Game-Hub Leaderboard</title>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">🏆 Top Players</h2>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
          <ul className="space-y-4">
            {players.map((player, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-700 pb-2"
              >
                <span className="font-semibold text-purple-400 flex items-center gap-3">
                  {index + 1}. {player.name}
                  {index === 0 && <span>🏆</span>}
                  {index === 1 && <span>🥈</span>}
                  {index === 2 && <span>🥉</span>}
                </span>
                <span className="flex items-center gap-2 text-yellow-400">
                  ⭐ {player.rating}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-md">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            Your Rank Matters
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Keep playing, stay active, and climb the leaderboard. Every match
            counts toward your legacy.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/games"
              className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
            >
              Play Now
            </a>
            <a
              href="/profile"
              className="px-5 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
