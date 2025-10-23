import { useLoaderData } from "react-router";

export default function Banner() {
  const games = useLoaderData();
  const bannerGames = games.slice(0, 3);

  return (
    <section className="relative h-[600px]">
      <div className="carousel w-full h-[700px] pb-25">
        {bannerGames.map((game, index) => (
          // console.log(game);
          <div
            key={game.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${game.coverPhoto})` }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              <div className="relative h-full container mx-auto px-4 flex items-end pb-12">
                <div className="max-w-2xl text-white">
                  <h1 className="text-5xl font-bold mb-4">{game.title}</h1>
                  <p className="text-xl mb-6 text-gray-300">
                    {game.description}
                  </p>
                  <a
                    href={game.downloadLink}
                    target="_blank"
                    className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 
                               hover:from-purple-700 hover:to-pink-700 rounded-full 
                               font-semibold transition transform hover:scale-105 inline-block"
                  >
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot  */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bannerGames.map((_, index) => (
          <a
            key={index}
            href={`#slide${index + 1}`}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-purple-500 transition"
          ></a>
        ))}
      </div>
    </section>
  );
}
