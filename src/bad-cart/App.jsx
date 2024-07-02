import React, { useState, useRef } from "react";
import Item from "./components/Item";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false); // [1] Add a state to force update the component
  const cartRef = useRef([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const addToCartRef = (newItems) => {
    cartRef.current = newItems;
  };

  const forceUpdateHandler = () => {
    setForceUpdate((prev) => !prev);
  };

  return (
    <>
      <main>
        <section>
          <Item addToCart={addToCart} addToCartRef={addToCartRef} />
          <Cart
            imperativelyAddedItems={cartRef.current}
            declarativeAddedItems={cartItems}
            forceUpdateHandler={forceUpdateHandler} // [2] Pass the force update handler to the Cart component
          />
        </section>
      </main>
    </>
  );
};

export default App;
