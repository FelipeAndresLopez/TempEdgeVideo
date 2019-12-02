import React from "react";
import "../assets/styles/components/Header.scss";

import logo from "../assets/static/logo-tempedge-video.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <div className="container">
    <header className="row justify-content-between align-items-center header">
      <img className="header__img" src={logo} alt="TempEdge Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p className="d-none d-sm-block">Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);

export default Header;
