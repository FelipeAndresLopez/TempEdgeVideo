import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="container-fluid">
    <div className="row align-items-center footer">
      <div className="col-sm-12 col-md-auto col-lg-auto">
        <Link to="/">Términos de uso</Link>
      </div>
      <div className="col-sm-12 col-md-auto col-lg-auto">
        <Link to="/">Declaración de privacidad</Link>
      </div>
      <div className="col-sm-12 col-md-auto col-lg-auto">
        <Link to="/">Centro de ayuda</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
