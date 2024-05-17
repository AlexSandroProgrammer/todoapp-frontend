import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

export const ListaParques = () => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    const getParks = async () => {
      try {
        const { data } = await todoAppApi.get("/park");
        setParks(data?.parks);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al obtener los carros.",
          text: `${error}`,
        });
      }
    };

    getParks();
  }, []);

  const deletePark = async (id) => {
    try {
      await todoAppApi.delete(`/park/${id}`);
      Swal.fire({
        icon: "success",
        title: "Parque Eliminado",
        text: "Parque Eliminado Correctamente",
        confirmButtonText: "Perfecto",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar el parque",
        text: `${error}`,
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row align-items-center bg-dark p-3">
          <h3 className="title col-md-10 col-8 mt-2 text-white">
            Lista de Parques
          </h3>
          <Link
            to={"/park/register"}
            className="btn btn-primary col-md-2 col-4 p-2"
          >
            Agregar Parque
          </Link>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-striped table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th>Acciones</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Capacidad</th>
                <th>Precio</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {parks.map((park) => (
                <tr key={park._id}>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <Link
                        to={`/park/${park?._id}`}
                        className="btn btn-success mr-2"
                      >
                        Editar
                      </Link>
                      <form>
                        <button
                          type="button"
                          onClick={() => deletePark(park?._id)}
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>
                      </form>
                    </div>
                  </td>
                  <td>{park?._id}</td>
                  <td>{park?.nombre}</td>
                  <td>{park?.capacidad}</td>
                  <td>{park?.precioEntrada}</td>
                  <td>{park?.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
