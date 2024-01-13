import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

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
        navigate("/login");
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="phone"
          minLength={9}
          placeholder="Phone Number"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
        {message && <p className={status}>{message}</p>}
        <button type="submit" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
      <p>
        Already a user?{" "}
        <span>
          <Link to="/login">here</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
