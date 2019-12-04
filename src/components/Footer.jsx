import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="container">
    <div className="row align-items-center footer">
      <div className="col-md-3 col-sm-12">
        <a href="/">Terminos de uso</a>
      </div>
      <div className="col-md-3 col-sm-12">
        <a href="/">Declaración de privacidad</a>
      </div>
      <div className="col-md-3 col-sm-12">
        <a href="/">Centro de ayuda</a>
      </div>
    </div>
  </footer>
);

export default Footer;
