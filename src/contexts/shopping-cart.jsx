/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
const CARTURL = import.meta.env.VITE_CART_API;

export const CartItems = createContext({
  items: [],
  addItemToCart: (item) => {},
  updateCartOnServer: async () => {},
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      updateCartOnServer();
    }
  }, [cartItems]);

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.image === item.image
    );

    if (existingItemIndex === -1) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } else {
      setCartItems((prevCartItems) => {
        const updatedItems = [...prevCartItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return [...updatedItems];
      });
    }
  };

  const updateCartOnServer = async () => {
    try {
      const response = await fetch(CARTURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) {
        throw json(
          { message: "Something went wrong!" },
          { status: response.status }
        );
      }
    } catch (error) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== item.id)
      );

      throw json(
        { message: "Failed to add item to the cart." },
        { status: error.status }
      );
    }
  };

  return (
    <CartItems.Provider
      value={{
        items: cartItems,
        addItemToCart,
        updateCartOnServer,
      }}
    >
      {children}
    </CartItems.Provider>
  );
};
