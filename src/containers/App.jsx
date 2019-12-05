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

  async cacheExists(category) {
    const listName = `${category}List`;
    const cacheList = window.localStorage.getItem(listName);

    console.log(cacheList);

    if (cacheList) {
      
      this.setState({ loading: false, [category]: JSON.parse(cacheList) });
      // return JSON.parse(cacheList);
    } else {
      const data = await this.fetchMovies(category);
      console.log(data)
      window.localStorage.setItem(listName, JSON.stringify(data));
    }
  }

  async fetchMovies(category) {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `${this.state.baseUrl}list_movies.json?genre=${category}&limit=10`
      );
      const movies = await response.json();

      this.setState({ loading: false, [category]: movies });

      return movies;
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  // fetchMovies(setActionMovies, "action");

  componentDidMount() {
    this.cacheExists("action");
    this.cacheExists("horror");
    this.cacheExists("animation");
    // this.fetchMovies("action");
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

            {!this.state.loading &&
              this.state.action &&
              this.state.action.data.movie_count > 0 && (
                <Categories title="Acción">
                  <Carousel>
                    {this.state.action.data.movies.map(movie => (
                      <CarouselItem key={movie.id} {...movie} />
                    ))}
                  </Carousel>
                </Categories>
              )}

            {!this.state.loading &&
              this.state.horror &&
              this.state.horror.data.movie_count > 0 && (
                <Categories title="Terror">
                  <Carousel>
                    {this.state.horror.data.movies.map(movie => (
                      <CarouselItem key={movie.id} {...movie} />
                    ))}
                  </Carousel>
                </Categories>
              )}

            {!this.state.loading &&
              this.state.animation &&
              this.state.animation.data.movie_count > 0 && (
                <Categories title="Animación">
                  <Carousel>
                    {this.state.animation.data.movies.map(movie => (
                      <CarouselItem key={movie.id} {...movie} />
                    ))}
                  </Carousel>
                </Categories>
              )}

            <Footer />
          </React.Fragment>
        );
      }
    }

    // return (
    //   <React.Fragment>
    //     <Header />
    //     <Search />

    //     <Categories title="Acción">
    //       <Carousel>
    //         <CarouselItem></CarouselItem>
    //         <CarouselItem></CarouselItem>
    //         <CarouselItem></CarouselItem>
    //         <CarouselItem></CarouselItem>
    //         <CarouselItem></CarouselItem>
    //       </Carousel>
    //     </Categories>
    //     <Footer />
    //   </React.Fragment>
    // );
  }
}

export default App;
