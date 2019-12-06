import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Login.scss";

import TwitterIcon from "../assets/static/twitter-icon.png";
import GoogleIcon from "../assets/static/google-icon.png";

const Login = () => (
  <React.Fragment>
    <div className="container-fluid">
      <div className="row justify-content-center login">
        <div className="col-11 col-md-8 col-lg-3 login__container">
          <div className="col-sm-12 col-md-10 offset-md-1">
            <h2>Inicia sesión</h2>
            <form className="login__container--form">
              <input className="input" type="text" placeholder="Correo" />
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
              />
              <button className="button">Iniciar sesión</button>
              <div className="login__container--remember-me">
                <label>
                  <input type="checkbox" id="cbox1" value="first_checkbox" />
                  Recuérdame
                </label>
                <a href="/">Olvidé mi contraseña</a>
              </div>
            </form>
            <section className="login__container--social-media">
              <div>
                <img src={GoogleIcon} /> Inicia sesión con Google
              </div>
              <div>
                <img src={TwitterIcon} /> Inicia sesión con Twitter
              </div>
            </section>
            <p className="login__container--register">
              No tienes ninguna cuenta <Link to="#">Regístrate</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <section className="login">
      <section className="login__container">


        
      </section>
    </section> */}
  </React.Fragment>
);
export default Login;
