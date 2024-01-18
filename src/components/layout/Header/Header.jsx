import React, { useEffect } from "react";
import Icon_Hamburguer from "../../../assets/Icon_Hamburguer";
import Icon_Calendar from "../../../assets/Icon_Calendar";
import "./Header.scss"
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
        <Icon_Hamburguer />
      </span>
      <Icon_Calendar />
      {/* </div> */}
    </header>
  );
};

export default Header;
