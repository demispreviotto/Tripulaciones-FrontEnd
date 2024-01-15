import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/Logo";
import { create } from "../../../features/owner/ownerSlice";

const OwnerCreate = () => {

  const initialValue = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  };
  const [data, setData] = useState(initialValue);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const message = useSelector((state) => state.owner.message);
  const status = useSelector((state) => state.owner.status);

  const handleOnChange = useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data]
  );

  useEffect(() => {
    if (status === "succeeded") {
      const timeoutId = setTimeout(() => {;
        setIsSubmitting(false);
        setData(initialValue);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else if (status === "failed") {
      setIsSubmitting(false);
    }
  }, [status, initialValue]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    dispatch(create(data));
  };

  return (
    <div className="register">
      <div className="logo-container">
        <Logo />
        <h2>FincUp</h2>
      </div>
      <div className="form-container">
        <h3 className="add">Agregue un propietario:</h3>
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
      </div>
    </div>
  );
};

export default OwnerCreate;
