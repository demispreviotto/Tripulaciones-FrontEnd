import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Logo_FincUp from "../../../assets/Logo_FincUp";

const Register = () => {
  const navigate = useNavigate();

  const initialValue = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  };
  const [data, setData] = useState(initialValue);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const message = useSelector((state) => state.auth.message);
  const status = useSelector((state) => state.auth.status);

  const handleOnChange = useCallback(
    (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data]
  );

  useEffect(() => {
    if (status === "succeeded") {
      const timeoutId = setTimeout(() => {
        navigate("/inicio-sesion");
        setIsSubmitting(false);
        setData(initialValue);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else if (status === "failed") {
      setIsSubmitting(false);
    }
  }, [status, navigate, initialValue]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    dispatch(register(data));
  };

  return (
    <div className="register">
      <div className="logo-container">
        <Logo_FincUp />
      </div>
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Correo"
            onChange={handleOnChange}
          />
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
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleOnChange}
          />
          {message && <p className={status}>{message}</p>}
          <button type="submit" disabled={isSubmitting}>
            Registrarse
          </button>
          <p>
            Ya tienes cuenta?
            <span>
              <Link to="/inicio-sesion"> Inicia sesión</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
