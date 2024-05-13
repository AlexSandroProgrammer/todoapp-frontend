import React from "react";
import { NavBar } from "../components";
import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container my-3">
        <h3>Pagina de Inicio Administrador</h3>
        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-4">
            <div className="card bg-dark">
              <div className="card-body">
                <h5 className="card-title">Gestion de Carros</h5>
                <p className="card-text">¿Desear Gestionar tus carros?</p>
                <Link className="btn btn-primary mr-2" to="/car">
                  Ver mis carros
                </Link>
                <Link className="btn btn-outline-primary" to="/car/register">
                  Registrar Carro
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="card bg-dark">
              <div className="card-body">
                <h5 className="card-title">Gestion de Parques</h5>
                <p className="card-text">¿Desear Gestionar tus parques?</p>
                <Link className="btn btn-primary mr-2" to="/park">
                  Ver mis parques
                </Link>
                <Link className="btn btn-outline-primary" to="/park/register">
                  Registrar Parque
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
