import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBuilding } from "../../../features/building/buildingSlice";
import Icon_GoBack from "../../../assets/Icon_GoBack";
import Logo_fincup from "../../../assets/Logo_fincup";
import "./BuildingCreate.scss";

const BuildingCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.building.message);
  const status = useSelector((state) => state.building.status);
  const initialValue = {
    address: "",
    number: "",
    zipCode: "",
    province: "",
    city: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createBuilding(formData));
    if (message === "Finca creada exitosamente") {
      setTimeout(() => {
        navigate("/fincas");
      }, 0o500);
    }
  };

  return (
    <>
      <header>
        <Icon_GoBack />
      </header>
      <div className="create-buildings">
        <h2>Crear Finca</h2>
        {/* <Logo_fincup /> */}
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="address"
            placeholder="Introduzca la dirección"
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Introduzca el Número"
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="cru"
            placeholder="Introduzca el IDUFIR o el CRU"
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="zipCode"
            placeholder="Introduzca el código postal"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="province"
            placeholder="Introduzca la comunidad"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Introduca la ciudad"
            onChange={handleOnChange}
          />
          <button type="submit" disabled={isSubmitting}>
            Crear Finca
          </button>
          {message && <p className={status}>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default BuildingCreate;
