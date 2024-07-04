import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ producto }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen}></img>
      <p>{producto.categoria}</p>
      <button onClick={() => navigate("detail/" + producto.id)}>Detalle</button>
    </div>
  );
};

export default ItemList;
