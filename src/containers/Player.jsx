import React, { useEffect } from "react";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import "../assets/styles/components/Player.scss";

const Player = props => {
  const { id, medium_cover_image } = props.match.params;
  const hasPalying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPalying ? (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <img src={props.playing.medium_cover_image} />
        </div>
        <div className="col-sm-12 col-md-6 text-white">
          <h1>{props.playing.title}</h1>
          <p>{props.playing.summary}</p>
          <br />
          <p>{`Rating: ${props.playing.rating}`}</p>
          <p>{`Year: ${props.playing.year}`}</p>
          <p>{`Duration: ${props.playing.runtime}`}</p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <div className="player">
            <video controls>
              <source src={props.playing.source} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-2">
          <div className="player--back-button">
            <button type="button" onClick={() => props.history.goBack()}>
              Regresar
            </button>
          </div>
        </div>
      </div>

      <br />
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
