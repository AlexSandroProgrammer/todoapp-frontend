import React from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks";

const carRegisterForm = {
  registerNombreParque: "",
  registerCapacidad: "",
  registerKilometraje: "",
  registerPrecioEntrada: "",
  registerDescripcion: "",
};
export const RegisterParkPage = () => {
  const {
    registerNombreParque,
    registerCapacidad,
    registerPrecioEntrada,
    registerDescripcion,
    onInputChange: onRegisterParkChange,
  } = useForm(carRegisterForm);
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row">
          <div className="mb-3">
            <h3>Registro de Parques</h3>
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
              maxLength={7}
            />
          </div>

          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Registrar Parque
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
