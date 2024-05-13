import React from "react";
import "../assets/auth.css";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
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
              <Link className="link" to={"/"}>
                Inicio de Sesion
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <form action="" className="form-box">
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
                className="input-field"
                required={true}
                placeholder="Ingresa tu email"
              />
              <input
                type="number"
                name="registerNumber"
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
              maxLength={30}
              minLength={6}
              className="input-field"
              required={true}
              placeholder="Ingresa tu contraseña"
            />

            <div className="input-box">
              <input type="submit" className="submit" value="Registrarme" />
            </div>
            <div className="two links-sm">
              <label htmlFor="">
                <Link to={`/`}>¿Quieres Iniciar Sesion?</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
