import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBuilding } from "../../../features/building/buildingSlice";

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
  const [active, setActive] = useState(false);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // handleActive()
    dispatch(createBuilding(data));
    // navigate("/buildings")
  };
  // useEffect(() => {
  //     if (status === "succeeded") {
  //         const timeoutId = setTimeout(() => {
  //             navigate("/buildings");
  //             setIsSubmitting(false);
  //             setFormData(initialValue);
  //         }, 3000);

  //         return () => clearTimeout(timeoutId);
  //     } else if (status === "failed") {
  //         setIsSubmitting(false);
  //     }
  // }, [status]);

  return (
    <>
      {!active ? (
        <button type="submit" onClick={handleActive}>
          Crear
        </button>
      ) : (
        <div>
          <h2>Crear Finca</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              onChange={handleOnChange}
            />
            <input
              type="number"
              name="number"
              placeholder="Número"
              onChange={handleOnChange}
            />
            <input
              type="number"
              name="zipCode"
              placeholder="Código postal"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="province"
              placeholder="Comunidad"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              onChange={handleOnChange}
            />
            <button type="submit" disabled={isSubmitting}>
              Crear Finca
            </button>
            {message && <p className={status}>{message}</p>}
          </form>
        </div>
      )}
    </>
  );
};

export default BuildingCreate;
