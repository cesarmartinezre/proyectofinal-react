import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "./OrderContainer.css";

const OrderContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const docsRef = collection(db, "productos");
      const querySnapshop = await getDocs(docsRef);
      setOrders(
        querySnapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
  }, []);

  return (
    <div className="ordercontainer">
      {orders.map((order) => (
        <div className="order" key={order}>
          <p>{order.id}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderContainer;
