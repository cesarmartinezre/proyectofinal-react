import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.css";
const CartWidget = () => {
  const { totalQuantityCart } = useContext(CartContext);
  return (
    <div className="cartwidget">
      <FontAwesomeIcon className="iconcart" icon="fa-solid fa-cart-flatbed" />{" "}
      <span className="contador">{totalQuantityCart}</span>
    </div>
  );
};

export default CartWidget;
