import React from "react";
import { LikeBtn1, LikeBtn2, NavLogo } from "./assets/data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewMovies from "./components/NewMovies";
import BestFilms from "./components/BestFilms";
import PopularPeople from "./components/PopularPeople";
import LaNews from "./components/LaNews";
import Expected from "./components/Expected";
import BoxOffice from "./components/BoxOffice";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NewMovies />
        <BestFilms />
        <PopularPeople />
        <LaNews />
        <Expected />
        <BoxOffice />
      </main>
      <Footer />
    </>
  );
};

export default App;
