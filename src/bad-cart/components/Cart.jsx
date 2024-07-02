import React, { useState, useEffect } from "react";

const Cart = ({
  imperativelyAddedItems,
  declarativeAddedItems,
  forceUpdateHandler,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleCartUpdate = () => {
      // This effect updates items with imperatively added items
      setItems([...imperativelyAddedItems]);
      console.log("handle cart update");
    };

    // Setting up an event listener for updating the cart imperatively [React won't see this...]
    const colorButton = document.getElementById("updateCartButton");
    colorButton.addEventListener("click", handleCartUpdate);

    return () => {
      colorButton.removeEventListener("click", handleCartUpdate);
    };
  }, [imperativelyAddedItems]);

  return (
    <div>
      <h2>Cart Component</h2>
      <h3>Declarative Items</h3>
      <ul>
        {declarativeAddedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Imperatively Items</h3>
      <ul>
        {imperativelyAddedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button id="updateCartButton" type="button">
        Update Cart Imperatively
      </button>
      <button type="button" onClick={forceUpdateHandler}>
        Force Update (Imperative)
      </button>
    </div>
  );
};

export default Cart;
