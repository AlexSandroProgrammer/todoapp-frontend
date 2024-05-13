import React from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks";

const carRegisterForm = {
  registerNumeroSerie: "",
  registerPlaca: "",
  registerModelo: "",
  registerKilometraje: "",
  registerMarca: "",
  registerTipo: "",
};
export const RegisterCarPage = () => {
  const {
    registerNumeroSerie,
    registerModelo,
    registerPlaca,
    registerMarca,
    registerTipo,
    registerKilometraje,
    onInputChange: onRegisterCarChange,
  } = useForm(carRegisterForm);
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row">
          <div className="mb-3">
            <h3>Registro de Carros</h3>
            <Link className="btn btn-danger" to={"/car"}>
              Regresar
            </Link>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="placa" className="form-label">
              Placa del Vehiculo
            </label>
            <input
              autoFocus
              type="text"
              name="registerPlaca"
              required={true}
              maxLength={6}
              minLength={6}
              value={registerPlaca}
              onChange={onRegisterCarChange}
              className="form-control"
              id="placa"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="numero_serie" className="form-label">
              Numero de Serie
            </label>
            <input
              type="number"
              name="registerNumeroSerie"
              value={registerNumeroSerie}
              maxLength={20}
              minLength={20}
              onChange={onRegisterCarChange}
              className="form-control"
              id="numero_serie"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="modelo" className="form-label">
              Modelo
            </label>
            <input
              type="number"
              name="registerModelo"
              value={registerModelo}
              maxLength={4}
              minLength={4}
              onChange={onRegisterCarChange}
              className="form-control"
              id="modelo"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="marca" className="form-label">
              Marca del Vehiculo
            </label>
            <input
              type="text"
              name="registerMarca"
              value={registerMarca}
              minLength={3}
              maxLength={20}
              onChange={onRegisterCarChange}
              className="form-control"
              id="marca"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="kilometraje" className="form-label">
              Kilometraje del Vehiculo
            </label>
            <input
              type="number"
              name="registerKilometraje"
              value={registerKilometraje}
              onChange={onRegisterCarChange}
              className="form-control"
              id="kilometraje"
              minLength={1}
              maxLength={7}
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tipo" className="form-label">
              Tipo del Vehiculo
            </label>
            <input
              type="text"
              name="registerTipo"
              className="form-control"
              value={registerTipo}
              minLength={2}
              maxLength={20}
              onChange={onRegisterCarChange}
              id="tipo"
            />
          </div>
          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Registrar Carro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
