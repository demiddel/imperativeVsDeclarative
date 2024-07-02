import React, { useState, useRef } from "react";

const Item = ({ addToCart, addToCartRef }) => {
  const [cartItems, setCartItems] = useState([]);
  const cartRef = useRef([]); // useRef to maintain an imperatively updated cart

  const addItemDeclarative = () => {
    const newItem = `Item ${cartItems.length + 1}`;
    setCartItems((prevItems) => [...prevItems, newItem]);
    addToCart(newItem);
  };

  const addItemImperative = () => {
    const newItem = `Item ${cartRef.current.length + 1}`;
    cartRef.current.push(newItem);
    addToCartRef(cartRef.current);
    console.info("Imperative cart items:", cartRef.current);
  };

  return (
    <div>
      <h2>Item Component</h2>
      <button onClick={addItemDeclarative} type="button">
        Add Item (Declarative)
      </button>
      <button onClick={addItemImperative} type="button">
        Add Item (Imperative)
      </button>
    </div>
  );
};

export default Item;
