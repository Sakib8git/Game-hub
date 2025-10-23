import { use } from "react";
import Banner from "./homeElements/Banner";
import Newsletter from "./homeElements/Newsletter";
import PopularGames from "./homeElements/PopularGames";
import { AuthContext } from "../Provider/AuthContext";
import { HashLoader } from "react-spinners";
import TrustedStats from "./TrustedStats";

export default function Home() {
  const {loading}= use(AuthContext)
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-70 bg-gray-900">
        <HashLoader color="#8de6f3" />
      </div>
    );
  }
  return (
    <main className="relative z-10">
      
      <Banner />

      {/* 🔮 Future Sections */}
      {/* <Features /> */}
      {/* <PopularGames /> */}
      <PopularGames></PopularGames>
      <TrustedStats></TrustedStats>
      <Newsletter></Newsletter>
      {/* <Testimonials /> */}
    </main>
  );
}

