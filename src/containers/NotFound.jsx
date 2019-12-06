import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <React.Fragment>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron">
            <h1 className="display-4">404: Página no encontrada.</h1>
            <p className="lead">
              Lo sentimos la página a la que estás accediendo no existe.
            </p>
            <hr className="my-4" />
            <p>
              Haz clic <Link to="/">aquí</Link> para regresar a la página de
              inicio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default NotFound;
