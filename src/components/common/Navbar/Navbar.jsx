import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="links">
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Nosotros</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to={"/profile"}>{user.firstName || "Profile"}</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/login"}>Inicio Sesión</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
