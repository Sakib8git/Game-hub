import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayoyt = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-3">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayoyt;
