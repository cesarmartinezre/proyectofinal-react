import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrecioCart, setTotalPrecioCart] = useState(0);
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);

  useEffect(() => {
    setTotalPrecioCart(
      cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    );
    setTotalQuantityCart(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);
  const addItemCart = (product) => {
    const itemExists = cart.some((item) => item.id === product.id);
    if (itemExists) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        })
      );
      return;
    }
    setCart((cart) => [...cart, product]);
  };

  const deleteItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrecioCart,
        totalQuantityCart,
        addItemCart,
        deleteItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
