import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import "./ItemCart.css";

const ItemCart = ({ item }) => {
  const { deleteItemCart } = useContext(CartContext);
  return (
    <div className="itemcard">
      <h3>{item.nombre}</h3>
      <img src={item.imagen} />
      <span>{item.quantity}</span>
      <button onClick={() => deleteItemCart(item.id)}>Borrar</button>
    </div>
  );
};

export default ItemCart;
