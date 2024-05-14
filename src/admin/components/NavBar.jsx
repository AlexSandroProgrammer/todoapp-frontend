import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/admin.css";
import { useAuthStore } from "../../hooks";
import Swal from "sweetalert2";

export const NavBar = () => {
  const { startLogout, errorMessage } = useAuthStore();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Panel Admin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navBarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item p-2">
                <Link to="/" className="btn btn-outline-primary">
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/car" className="btn btn-outline-primary">
                  Carros
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/park" className="btn btn-outline-primary">
                  Parques
                </Link>
              </li>
              <li className="nav-item p-2">
                <button onClick={startLogout} className="btn btn-danger">
                  Cerrar Sesion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
