import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  const [flag, setFlag] = useState(false);
  const refFlag = useRef(false);

  useEffect(() => {
    const handleColorChange = () => {
      const colorH1 = document.querySelector(".color-h1");
      if (colorH1) {
        colorH1.style.color = colorH1.style.color === "red" ? "blue" : "red";
      }
    };

    const colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", handleColorChange);

    return () => {
      colorButton.removeEventListener("click", handleColorChange);
    };
  }, []);

  useEffect(() => {
    const handleExternalIncrement = () => {
      setCount((prevCount) => prevCount + 1); // Update React state
      refCount.current++; // Imperatively update useRef count (not reflected in React state)
    };

    const externalIncrementButton = document.getElementById(
      "externalIncrementButton"
    );
    externalIncrementButton.addEventListener("click", handleExternalIncrement);

    return () => {
      externalIncrementButton.removeEventListener(
        "click",
        handleExternalIncrement
      );
    };
  }, []);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1); // Update React state
  };

  const incrementCountRef = () => {
    refCount.current++; // Update useRef value imperatively
    forceRerender(); // Force re-render to reflect useRef change
  };

  const toggleFlag = () => {
    setFlag((prevFlag) => !prevFlag); // Update React state
    refFlag.current = !refFlag.current; // Update useRef value imperatively
  };

  const forceRerender = () => {
    // This is a hacky way to force a re-render for demonstration purposes
    // In real applications, you should not manipulate React's rendering cycle directly
    setCount((prevCount) => prevCount); // Update React state to trigger a re-render
  };

  return (
    <div>
      <h1 className="color-h1">Change my color</h1>
      <p>React State Count: {count}</p>
      <p>useRef Count: {refCount.current}</p>
      <p>React State Flag: {flag ? "True" : "False"}</p>
      <p>useRef Flag: {refFlag.current ? "True" : "False"}</p>
      <button onClick={incrementCount} type="button">
        Increment Count (useState)
      </button>
      <button onClick={incrementCountRef} type="button">
        Increment Count (useRef)
      </button>
      <button onClick={toggleFlag} type="button">
        Toggle Flag
      </button>
      <button id="colorButton" type="button">
        Change Color
      </button>
      <button id="externalIncrementButton" type="button">
        External Increment Count
      </button>
    </div>
  );
};

export default App;
