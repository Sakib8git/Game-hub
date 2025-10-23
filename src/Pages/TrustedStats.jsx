export default function TrustedStats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Trusted By Gamers, Powered By Passion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-purple-700 transition">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">1.2M+</h3>
            <p className="text-sm text-gray-300">Registered Players</p>
            <p className="text-xs text-green-400 mt-2">🎮 Growing Every Day</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-green-700 transition">
            <h3 className="text-3xl font-bold text-green-400 mb-2">20+</h3>
            <p className="text-sm text-gray-300">Featured Games</p>
            <p className="text-xs text-green-400 mt-2">🏆 Curated For You</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-orange-700 transition">
            <h3 className="text-3xl font-bold text-orange-400 mb-2">27+</h3>
            <p className="text-sm text-gray-300">Upcoming Releases</p>
            <p className="text-xs text-orange-300 mt-2">
              🚀 Launching This Season
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
