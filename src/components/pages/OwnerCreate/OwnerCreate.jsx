import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOwner } from "../../../features/owner/ownerSlice";
import { useLocation, useParams } from "react-router-dom";
import "./OwnerCreate.css";

const OwnerCreate = ({buildingId}) => {
  const initialValue = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    buildingIds: buildingId || null,
  };
  const [data, setData] = useState(initialValue);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const message = useSelector((state) => state.owner.message);
  const status = useSelector((state) => state.owner.status);
  const [active, setActive] = useState(false);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status === "succeeded") {
      const timeoutId = setTimeout(() => {
        setIsSubmitting(false);
        setData(initialValue);
      }, 3000);
      return () => clearTimeout(timeoutId);
    } else if (status === "failed") {
      setIsSubmitting(false);
    }
  }, [status]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const updatedData = {
      ...data,
      buildingIds: buildingId,
    };
    dispatch(createOwner(updatedData));
    console.log(updatedData);
    console.log(buildingId)
  };

  const handleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="form-container">
      <h3 className="add">Agregue un propietario:</h3>
      {!active ? (
        <button type="submit" onClick={handleActive}>
          Crear
        </button>
      ) : (
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            onChange={handleOnChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Número de teléfono"
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            onChange={handleOnChange}
          />
          {message && <p className={status}>{message}</p>}

          <button type="submit" disabled={isSubmitting}>
            Crear
          </button>
        </form>
      )}
    </div>
  );
};

export default OwnerCreate;
