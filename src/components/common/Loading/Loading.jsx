import React from "react";
import Logo_FincUp from "../../../assets/Logo_fincup";

const Loading = () => {
  return (
    <div className="">
      <div className="logo-container" style={{ height: "160px" }}>
        <Logo_FincUp />
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;
