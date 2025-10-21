export default function Home() {
  // শুধু ডেমো ডেটা (static)
  const bannerGames = [
    {
      id: 1,
      title: "Game One",
      description: "Epic adventure awaits you in Game One.",
      coverPhoto: "https://via.placeholder.com/1200x600.png?text=Game+One",
    },
    {
      id: 2,
      title: "Game Two",
      description: "Battle your way through Game Two.",
      coverPhoto: "https://via.placeholder.com/1200x600.png?text=Game+Two",
    },
    {
      id: 3,
      title: "Game Three",
      description: "Discover mysteries in Game Three.",
      coverPhoto: "https://via.placeholder.com/1200x600.png?text=Game+Three",
    },
  ];

  return (
    <main className="relative z-10">
      {/* Home Page */}
      <div>
        {/* Banner Slider */}
        <section className="relative h-96 overflow-hidden">
          {bannerGames.map((game, index) => (
            <div
              key={game.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === 0 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${game.coverPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              <div className="relative h-full container mx-auto px-4 flex items-end pb-12">
                <div className="max-w-2xl">
                  <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                    {game.title}
                  </h1>
                  <p className="text-xl mb-6 text-gray-300">
                    {game.description}
                  </p>
                  <button
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                               hover:from-purple-700 hover:to-pink-700 rounded-full 
                               font-semibold transition transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* নিচের ডটস (static) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {bannerGames.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === 0 ? "bg-purple-500" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}