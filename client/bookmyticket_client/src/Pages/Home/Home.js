import React from "react";
import Header from "../../components/Header/Header";
import PosterCard from "../../components/PosterCard/PosterCard";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="cards-container">
        <PosterCard />
        <PosterCard />
      </div>
    </div>
  );
};

export default Home;
