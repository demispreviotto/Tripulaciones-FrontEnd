import React from "react";
import "./Preloader.css";
import Logo from "../../../assets/Logo";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="logo-container">
        <Logo />
        <h2>FincUp</h2>
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default Preloader;
