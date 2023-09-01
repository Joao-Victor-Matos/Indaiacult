import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} />
      <span>
        Feito de qualquer jeito e <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
