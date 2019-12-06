import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => (
  <div className="container-fluid">
    <div className="categories">
      <h2 className="categories__title">{title}</h2>
      {children}
    </div>
  </div>
);

export default Categories;
