import Banner from "./homeElements/Banner";
import PopularGames from "./homeElements/PopularGames";

export default function Home() {
  return (
    <main className="relative z-10">
      
      <Banner />

      {/* 🔮 Future Sections */}
      {/* <Features /> */}
      {/* <PopularGames /> */}
      <PopularGames></PopularGames>
      {/* <Testimonials /> */}
    </main>
  );
}

