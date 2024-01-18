import React from "react";
import Logo_FincUp from "../../../assets/Logo_FincUp";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <div className="text-not-found">
        <h1>¡Ups!</h1>
        <h3>Parece que no hemos encontrado tu búsqueda</h3>
      </div>
      <Logo_FincUp />
      <button onClick={goHome}>Ir a Inicio</button>
    </div>
  );
};

export default NotFound;
