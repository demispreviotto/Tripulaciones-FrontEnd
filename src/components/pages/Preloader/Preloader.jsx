import React from "react";
import "./Preloader.css";
import Logo_FincUp from "../../../assets/Logo_fincup";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="logo-container">
        <Logo_FincUp />
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default Preloader;
