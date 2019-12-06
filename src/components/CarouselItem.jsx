import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";

import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

const CarouselItem = props => {
  const {
    id,
    medium_cover_image,
    title,
    year,
    rating,
    runtime,
    isList
  } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      medium_cover_image,
      title,
      year,
      rating,
      runtime
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-auto">
      <div className="carousel-item">
        <img
          className="carousel-item__img"
          src={medium_cover_image}
          alt={title}
        />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img
                title="Reproducir"
                className="carousel-item__details--img"
                src={playIcon}
                alt="Play Icon"
              />
            </Link>

            {isList ? (
              <img
                title="Remover de favoritos"
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Remove Icon"
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                title="Añadir a favoritos"
                className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
            )}
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${rating} ${runtime}`}</p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  medium_cover_image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number,
  runtime: PropTypes.number
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
