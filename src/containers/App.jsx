import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://yts.lt/api/v2/list_movies.json");
      const data = await response.json();
      setVideos(data);
    };
    fetchData();
  }, []);

  console.log(videos);
  return (
    <React.Fragment>
      <Header />
      <Search />

      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Preferidas por tus amigos">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </React.Fragment>
  );
};

export default App;
