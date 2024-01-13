import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo";
import "./Service.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../../../features/services/serviceSlice";

const Service = () => {
  const navigate = useNavigate();

  const initialValue = {
    company: "",
    theme: "",
    contactNumber: "",
    contactEmail: "",
    rate: "",
  };
  const [data, setData] = useState(initialValue);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const message = useSelector((state) => state.auth.message);
  const status = useSelector((state) => state.auth.status);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status === "succeeded") {
      const timeoutId = setTimeout(() => {
        navigate("/login");
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
    dispatch(create(data));
  };

  return (
    <div className="service">
      <div className="logo-container">
        <Logo />
        <h2>Cajon Digital</h2>
      </div>
      <div className="form-container">
        <h3 className="add">Agregue un servicio:</h3>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="company"
            placeholder="Compañía"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="theme"
            placeholder="Tema"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Número de Contacto"
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="contactEmail"
            placeholder="Correo de Contacto"
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="rate"
            placeholder="Calificación"
            onChange={handleOnChange}
          />
          {message && <p className={status}>{message}</p>}
          <button type="submit" disabled={isSubmitting}>
            Crear Servicio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service;
