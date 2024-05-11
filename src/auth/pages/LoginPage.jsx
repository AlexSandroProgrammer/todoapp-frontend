import React from "react";
import "../assets/auth.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
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
              <Link className="link active">Inicio de Sesion</Link>
            </li>
            <li>
              <Link className="link">Registrarme</Link>
            </li>
          </ul>
        </div>
      </nav>

      <form action="" className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Inicio de Sesion</header>
            <span>Bienvenido a TodoApp</span>
            <span>Por favor ingresa tus credenciales</span>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="loginEmail"
              autoFocus
              maxLength={50}
              minLength={5}
              className="input-field"
              required={true}
              placeholder="Ingresa tu correo electronico"
            />
            <input
              type="password"
              name="loginPassword"
              maxLength={30}
              minLength={6}
              className="input-field"
              required={true}
              placeholder="Ingresa tu contraseña"
            />
            <div className="input-box">
              <input type="submit" className="submit" value="Iniciar Sesion" />
            </div>
            <div className="two links-sm">
              <label htmlFor="">
                <Link to={`/register`}>¿Quieres registrarte?</Link>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
