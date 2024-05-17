import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

export const ListaCarros = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
      try {
        const { data } = await todoAppApi.get("/car");
        setCars(data?.cars);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al obtener los carros.",
          text: `${error}`,
        });
      }
    };

    getCars();
  }, []);

  const deleteCar = async (id) => {
    try {
      await todoAppApi.delete(`/car/${id}`);
      Swal.fire({
        icon: "success",
        title: "Carro Eliminado",
        text: "Carro Eliminado Correctamente",
        confirmButtonText: "Perfecto",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar el carro.",
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
            Lista de Carros
          </h3>
          <Link
            to={"/car/register"}
            className="btn btn-primary col-md-2 col-4 p-2"
          >
            Agregar Carro
          </Link>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-striped table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th>Acciones</th>
                <th>ID</th>
                <th>Placa</th>
                <th>Numero de Serie</th>
                <th>Modelo del Carro</th>
                <th>Marca</th>
                <th>kilometraje</th>
                <th>tipo</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((carro) => (
                <tr key={carro._id}>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <Link
                        to={`/car/${carro?._id}`}
                        className="btn btn-success mr-2"
                      >
                        Editar
                      </Link>
                      <form>
                        <button
                          type="button"
                          onClick={() => deleteCar(carro?._id)}
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>
                      </form>
                    </div>
                  </td>
                  <td>{carro?._id}</td>
                  <td>{carro?.placa}</td>
                  <td>{carro?.numero_serie}</td>
                  <td>{carro?.modelo}</td>
                  <td>{carro?.marca}</td>
                  <td>{carro?.kilometraje}</td>
                  <td>{carro?.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
