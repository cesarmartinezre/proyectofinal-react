import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ completeOrder }) => {
  const [nameBuyer, setNameBuyer] = useState("");
  const [telBuyer, setTelBuyer] = useState("");
  const [emailBuyer, setEmailBuyer] = useState("");

  const handleCompleteOrder = async (e) => {
    e.preventDefault();
    const buyer = {
      name: nameBuyer,
      tel: telBuyer,
      email: emailBuyer,
    };
    await handleCompleteOrder(buyer);
  };

  return (
    <form className="checkoutbuyer" onSubmit={(e) => handleCompleteOrder(e)}>
      <input
        type="text"
        value={nameBuyer}
        onChange={(e) => setNameBuyer(e.currentTarget.value)}
        placeholder="ingrese su nombre y apellido"
        required
      />
      <input
        type="number"
        value={telBuyer}
        onChange={(e) => setTelBuyer(e.currentTarget.value)}
        placeholder="ingrese su telefono"
      />
      <input
        type="email"
        value={emailBuyer}
        onChange={(e) => setEmailBuyer(e.currentTarget.value)}
        placeholder="ingrese su email"
      />
      <button type="submit">Finalizar Compra</button>
    </form>
  );
};

export default Checkout;
