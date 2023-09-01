import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=arte">
            <h6>Arte</h6>
          </Link>
          <Link className="link" to="/?cat=historia">
            <h6>História</h6>
          </Link>
          <Link className="link" to="/?cat=lugares">
            <h6>Lugares</h6>
          </Link>
          <span>João</span>
          <span>Sair</span>
          <span className="crie">
            <Link className="link" to="/crie">
              Criar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
