import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="categories">
          <h3 className="categories__title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Categories;
