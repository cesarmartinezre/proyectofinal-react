import React, { useContext, useState } from "react";
import Count from "../Count/Count";
import CartContext from "../../context/cart/CartContext";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const { cart, addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addtoCart = ({ quantity, ...producto }) => {
    addItemCart({ ...producto, quantity });
    navigate("../../cart");
  };
  console.log(producto.nombre);
  return (
    <div className="detail">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen}></img>
      <p>categoria: {producto.categoria}</p>
      <p>precio: {producto.precio}</p>
      <p>stock: {producto.stock}</p>
      <p>descripcion: {producto.descripcion}</p>
      <Count count={count} handleCount={setCount} stock={producto.stock} />
      <button onClick={() => addtoCart({ ...producto, quantity: count })}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
