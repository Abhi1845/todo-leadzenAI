import React from "react";
import logo from "../assets/Leadzen.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Leadzen logo" />
      <h1>TodoList</h1>
    </div>
  );
}

export default Header;
