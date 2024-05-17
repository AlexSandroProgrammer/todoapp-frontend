import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

const parkUpdateForm = {
  registerNombreParque: "",
  registerCapacidad: "",
  registerKilometraje: "",
  registerPrecioEntrada: "",
  registerDescripcion: "",
};
export const UpdateParkPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [initialForm, setInitialForm] = useState(parkUpdateForm);
  const {
    registerNombreParque,
    registerCapacidad,
    registerPrecioEntrada,
    registerDescripcion,
    onInputChange: onRegisterParkChange,
  } = useForm(initialForm);

  useEffect(() => {
    const getParkById = async () => {
      try {
        const { data } = await todoAppApi.get(`/park/${id}`);
        const { parkSelect } = data;
        setInitialForm({
          registerNombreParque: parkSelect.nombre,
          registerCapacidad: parkSelect.capacidad,
          registerPrecioEntrada: parkSelect.precioEntrada,
          registerDescripcion: parkSelect.descripcion,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getParkById();
  }, []);

  const updatePark = async (e) => {
    e.preventDefault();

    const updateParkFields = {};
    if (registerNombreParque) updateParkFields.nombre = registerNombreParque;
    if (registerCapacidad) updateParkFields.capacidad = registerCapacidad;
    if (registerPrecioEntrada)
      updateParkFields.precioEntrada = registerPrecioEntrada;
    if (registerDescripcion) updateParkFields.descripcion = registerDescripcion;
    try {
      await todoAppApi.put(`/park/${id}`, updateParkFields);
      Swal.fire({
        icon: "success",
        title: "Parque Actualizado",
        text: "Parque Actualizado Correctamente",
      }).then(() => {
        navigate("/park");
      });
    } catch (error) {
      const errorMessage =
        error.response?.data.message ||
        "Error al momento de actualizar el parque";
      Swal.fire({
        icon: "error",
        title: "Error al momento de actualizar el parque",
        text: errorMessage,
      });
    }
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row" onSubmit={updatePark}>
          <div className="mb-3">
            <h3>Actualizacion de Parque</h3>
            <Link className="btn btn-danger" to={"/park"}>
              Regresar
            </Link>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="nombreParque" className="form-label">
              Nombre del Parque
            </label>
            <input
              autoFocus
              type="text"
              name="registerNombreParque"
              required={true}
              maxLength={100}
              minLength={3}
              placeholder="Ingresa el nombre del parque"
              value={registerNombreParque}
              onChange={onRegisterParkChange}
              className="form-control"
              id="nombreParque"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="capacidad" className="form-label">
              Capacidad de Personas
            </label>
            <input
              type="number"
              name="registerCapacidad"
              value={registerCapacidad}
              placeholder="Ingresar la capacidad de personas"
              maxLength={1}
              minLength={5}
              onChange={onRegisterParkChange}
              className="form-control"
              id="capacidad"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="precioEntrada" className="form-label">
              Precio de Entrada
            </label>
            <input
              type="number"
              name="registerPrecioEntrada"
              placeholder="Ingresar precio de entrada"
              value={registerPrecioEntrada}
              maxLength={4}
              minLength={4}
              onChange={onRegisterParkChange}
              className="form-control"
              id="precioEntrada"
            />
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="descripcion" className="form-label">
              Descripcion del Parque
            </label>
            <textarea
              type="number"
              name="registerDescripcion"
              value={registerDescripcion}
              placeholder="Ingresar descripcion del parque"
              rows={3}
              onChange={onRegisterParkChange}
              className="form-control"
              id="descripcion"
              minLength={1}
              maxLength={150}
            />
          </div>

          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Actualizar Parque
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
