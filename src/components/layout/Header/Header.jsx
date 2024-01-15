import React from "react";
import Hamburguer from "../../../assets/Hamburguer";
import Calendar from "../../../assets/Calendar";

const Header = () => {
  return (
    <header>
      <div>
        <Hamburguer height={"26px"} />
        <Calendar />
      </div>
    </header>
  );
};

export default Header;
