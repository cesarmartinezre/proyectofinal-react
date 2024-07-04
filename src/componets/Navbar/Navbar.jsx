import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="link" to="/">
          Motores
        </Link>
        <Link className="link" to="/orden">
          orden
        </Link>
        <Link className="link" to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
