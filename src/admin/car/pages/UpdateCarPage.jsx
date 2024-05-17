import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

const carUpdateForm = {
  registerNumeroSerie: "",
  registerPlaca: "",
  registerModelo: "",
  registerKilometraje: "",
  registerMarca: "",
  registerTipo: "",
};
export const UpdateCarPage = () => {
  const { id } = useParams();
  // estado para el manejo de los errores
  const navigate = useNavigate();
  const [initialForm, setInitialForm] = useState(carUpdateForm);
  const {
    registerNumeroSerie,
    registerModelo,
    registerPlaca,
    registerMarca,
    registerTipo,
    registerKilometraje,
    onInputChange: onRegisterCarChange,
  } = useForm(initialForm);

  useEffect(() => {
    const getCarById = async () => {
      try {
        const { data } = await todoAppApi.get(`/car/${id}`);
        const { car } = data;
        setInitialForm({
          registerNumeroSerie: car.numero_serie,
          registerPlaca: car.placa,
          registerModelo: car.modelo,
          registerKilometraje: car.kilometraje,
          registerMarca: car.marca,
          registerTipo: car.tipo,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getCarById();
  }, [id]);

  const updateCar = async (e) => {
    e.preventDefault();

    // crear un objeto con solo los campos que no esten vacios
    const updateFields = {};
    if (registerPlaca) updateFields.placa = registerPlaca;
    if (registerNumeroSerie) updateFields.numero_serie = registerNumeroSerie;
    if (registerModelo) updateFields.modelo = registerModelo;
    if (registerKilometraje) updateFields.kilometraje = registerKilometraje;
    if (registerMarca) updateFields.marca = registerMarca;
    if (registerTipo) updateFields.tipo = registerTipo;

    try {
      await todoAppApi.put(`/car/${id}`, updateFields);

      Swal.fire({
        icon: "success",
        title: "Carro Actualizado",
        text: "Los datos se han actualizado correctamente",
      }).then(() => {
        navigate("/car");
      });
    } catch (error) {
      const errorMessage =
        error.response?.data.message ||
        "Error al momento de actualizar el carro";
      Swal.fire({
        icon: "error",
        title: "Error al momento de actualizar el carro",
        text: errorMessage,
      });
    }
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row" onSubmit={updateCar}>
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
              placeholder="Ingresar placa del vehiculo"
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
              placeholder="Ingresa numero de serie"
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
              placeholder="Ingresar el modelo del vehiculo"
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
              placeholder="Ingresa la marca del vehiculo"
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
              placeholder="Ingresar kilometraje actual"
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
              placeholder="Ingresar tipo de vehiculo"
              value={registerTipo}
              minLength={2}
              maxLength={20}
              onChange={onRegisterCarChange}
              id="tipo"
            />
          </div>
          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Actualizar Carro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
