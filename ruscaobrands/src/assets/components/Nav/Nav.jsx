import React from "react";
import NavBar from "./Style";
import { TbWorld } from "react-icons/tb";

const Nav = () => {
  return (
    <NavBar>
      <a href="#">Projects</a>
      <a href="#">About</a>
      <a href="#">Metodology</a>
      <a href="#">Contact</a>
      <div>
        <TbWorld />
        <p>EN</p>
        <p>PT</p>
      </div>
    </NavBar>
  );
};

export default Nav;
