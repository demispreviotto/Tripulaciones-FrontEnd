import React from "react";
import Hamburguer from "../../../assets/Hamburguer";
import Calendar from "../../../assets/Calendar";
import "./Header.css"
const Header = () => {
  return (
    <header>
      {/* <div> */}
      <Hamburguer />
      <Calendar />
      {/* </div> */}
    </header>
  );
};

export default Header;
