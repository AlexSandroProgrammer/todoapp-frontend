import React from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";

export const ListaParques = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row mr-2 bg-dark p-3">
          <h3 className="title col-md-10 mt-2">Lista de Parques</h3>
          <Link to={"/park/register"} className="btn btn-primary col-md-2 p-3">
            Agregar Parque
          </Link>
        </div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>N. del Parque</th>
              <th>Capacidad</th>
              <th>precio de Entrada</th>
              <th>descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
