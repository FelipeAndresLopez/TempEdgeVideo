import React from "react";

import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => (
  <section className="carousel-fluid">
    <div className="carousel__container">
      <div className="row justify-content-center">
        {children}
      </div>
    </div>
  </section>
);

export default Carousel;
