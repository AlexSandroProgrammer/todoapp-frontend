import { useEffect } from "react";
import "../assets/auth.css";
import { Link } from "react-router-dom";
import { useAuthStore, useForm } from "../../hooks";
import Swal from "sweetalert2";

const registerForm = {
  registerNames: "",
  registerSurnames: "",
  registerEmail: "",
  registerNumber: "",
  registerPassword: "",
};
export const RegisterPage = () => {
  // llamar los metodos del hook para el manejo de registro
  const { startRegister, errorMessage } = useAuthStore();
  const {
    registerNames,
    registerSurnames,
    registerEmail,
    registerPassword,
    registerNumber,
    onInputChange: onRegisterUserChange,
  } = useForm(registerForm);
  // funcion que se encargara de despachar dichos datos
  const onSubmitRegister = (event) => {
    event.preventDefault();
    startRegister({
      email: registerEmail,
      names: registerNames,
      surnames: registerSurnames,
      number: registerNumber,
      password: registerPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        icon: "error",
        title: "Error registro de Usuario.",
        text: `${errorMessage}`,
      });
    }
  }, [errorMessage]);

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>
            TODOAPP <span>.</span>
          </p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link className="link active">Registro de Usuario</Link>
            </li>
            <li>
              <Link className="link" to={"/auth/login"}>
                Inicio de Sesion
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <form onSubmit={onSubmitRegister} autoComplete="off" className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Registro de Usuario</header>
            <span>Bienvenido al formulario de registro</span>
            <span>Por favor ingresa los siguientes datos</span>
          </div>
          <div className="input-box">
            <div className="two-fields-inputs">
              <input
                type="text"
                name="registerNames"
                value={registerNames}
                onChange={onRegisterUserChange}
                autoFocus
                maxLength={100}
                minLength={3}
                className="input-field"
                required={true}
                placeholder="Ingresa tu nombre"
              />
              <input
                type="text"
                name="registerSurnames"
                value={registerSurnames}
                onChange={onRegisterUserChange}
                maxLength={100}
                minLength={3}
                className="input-field"
                required={true}
                placeholder="Ingresa tus apellidos"
              />
            </div>
            <div className="two-fields-inputs">
              <input
                type="email"
                name="registerEmail"
                maxLength={50}
                minLength={5}
                value={registerEmail}
                onChange={onRegisterUserChange}
                className="input-field"
                required={true}
                placeholder="Ingresa tu email"
              />
              <input
                type="number"
                name="registerNumber"
                value={registerNumber}
                onChange={onRegisterUserChange}
                maxLength={11}
                minLength={10}
                className="input-field"
                required={true}
                placeholder="Ingresa tu N. celular"
              />
            </div>
            <input
              type="password"
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterUserChange}
              maxLength={30}
              minLength={6}
              className="input-field"
              required={true}
              placeholder="Ingresa tu contraseña"
            />

            <div className="input-box">
              <input type="submit" className="submit" value="Registrarme" />
            </div>
            <div className="two links-sm text-center">
              <label htmlFor="">
                <Link to={`/auth/`}>¿Quieres Iniciar Sesion?</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
