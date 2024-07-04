import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "./ItemCartContainer.css";
import { Navigate, useNavigate } from "react-router-dom";

const ItemCartContainer = () => {
  const { cart, totalPrecioCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cartcontainer">
      <div className="itemcartcontainer">
        {cart.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}
      </div>
      <div className="Total">
        <p>Total: {totalPrecioCart}</p>
        <button onClick={() => navigate("/checkout")}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default ItemCartContainer;
