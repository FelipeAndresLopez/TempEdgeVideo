import React from "react";

import "../assets/styles/components/Search.scss";

const Search = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center main">
      <div className="col-sm-12 col-lg-8">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className="search-input" placeholder="Buscar..." />
      </div>
    </div>
  </div>
);

export default Search;
