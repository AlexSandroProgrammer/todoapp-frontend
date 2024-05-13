import React from "react";
import { Link } from "react-router-dom";
import "../assets/admin.css";

export const NavBar = () => {
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
                <Link to="/" className="btn btn-outline-primary nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/car" className="btn btn-outline-primary nav-link">
                  Carros
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link to="/park" className="btn btn-outline-primary nav-link">
                  Parques
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
