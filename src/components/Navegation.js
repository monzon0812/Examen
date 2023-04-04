import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home"
import ListaPaciente from "../pages/ListaPaciente"
import Registrar from "../pages/Registrar"
import Login from "../pages/Login"

const Navegation = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="Home">
            Home
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="Login">
                <NavLink className="nav-link active" to="/Login">
                  Iniciar sesion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Registrar">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to='/ListaPaciente'>
                  Control de personal
                </NavLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navegation;
