import Banner from "./homeElements/Banner";
import Newsletter from "./homeElements/Newsletter";
import PopularGames from "./homeElements/PopularGames";

export default function Home() {
  return (
    <main className="relative z-10">
      
      <Banner />

      {/* 🔮 Future Sections */}
      {/* <Features /> */}
      {/* <PopularGames /> */}
      <PopularGames></PopularGames>
      <Newsletter></Newsletter>
      {/* <Testimonials /> */}
    </main>
  );
}

