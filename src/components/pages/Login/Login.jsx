import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo_FincUp from "../../../assets/Logo_fincup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loginResponse = await dispatch(login(data));
    if (loginResponse.payload?.user) {
      navigate("/");
    }
  };
  return (
    <div className="login">
      <div className="logo-container">
        <Logo_FincUp />
        <h2 style={{ color: "#AC1A2F" }}>FincUp</h2>
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
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleOnChange}
          />
          <button type="submit" disabled={isSubmitting}>
            Iniciar Sesión
          </button>
          <p>
            No tienes cuenta?
            <span>
              <Link to="/registro"> Regístrate</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
