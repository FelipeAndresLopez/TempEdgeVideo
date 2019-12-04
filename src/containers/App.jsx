import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://yts.lt/api/v2/",
      loading: true,
      error: null,
      action: undefined,
      horror: undefined,
      animation: undefined
    };
  }

  async fetchMovies(category) {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `${this.state.baseUrl}list_movies.json?genre=${category}&limit=10`
      );
      const movies = await response.json();

      console.log(movies);
      this.setState({ loading: false, [category]: movies });
      console.log(this.state);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  // fetchMovies(setActionMovies, "action");

  componentDidMount() {
    this.fetchMovies("action");
    // this.fetchMovies("horror");
    // this.fetchMovies("animation");
  }

  render() {
    {
      if (this.state.error) return <h1>{this.state.error.message}</h1>;
      else {
        return (
          <React.Fragment>
            <Header />
            <Search />

            {!this.state.loading && this.state.action.data.movie_count > 0 && (
              <Categories title="Acción">
                <Carousel>
                  {this.state.action.data.movies.map(movie => (
                    <CarouselItem key={movie.id} {...movie} />
                  ))}
                </Carousel>
              </Categories>
            )}
            <Categories title="Terror">
              <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
              </Carousel>
            </Categories>
            <Categories title="Animación">
              <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
              </Carousel>
            </Categories>
            <Footer />
          </React.Fragment>
        );
      }
    }
  }
}

export default App;
