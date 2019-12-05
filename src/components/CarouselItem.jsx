import React from "react";

import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";

const CarouselItem = props => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={props.medium_cover_image}
        alt=""
      />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{props.title}</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  </div>
);

export default CarouselItem;
