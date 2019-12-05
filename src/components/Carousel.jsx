import React from "react";

import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
      <div className="row">
        {children}
      </div>
    </div>
  </section>
);

export default Carousel;
