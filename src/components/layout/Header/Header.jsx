import React, { useEffect } from "react";
import Hamburguer from "../../../assets/Hamburguer";
import Calendar from "../../../assets/Calendar";
import "./Header.css"
import { logout } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOnClick = () => {
    dispatch(logout())
    navigate("/inicio-sesion")
  }
  // useEffect(() => {
  //   !user && navigate("/iniciar-sesion")
  // }, [])

  return (
    <header>
      {/* <div> */}
      <span onClick={handleOnClick}>
        <Hamburguer />
      </span>
      <Calendar />
      {/* </div> */}
    </header>
  );
};

export default Header;
