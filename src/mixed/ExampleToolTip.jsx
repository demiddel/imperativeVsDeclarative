import React, { useState, useEffect } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.querySelector(".text-content");

    if (isVisible) {
      const newParagraph = document.createElement("p");
      newParagraph.classList.add("tooltip");
      const text = document.createTextNode("consectetur adipiscing elit");
      newParagraph.appendChild(text);
      el.appendChild(newParagraph);
    } else {
      const tooltip = document.querySelector(".tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    }
  }, [isVisible]);

  const handleToolTip = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <main>
      <section>
        <div className="text-content">
          <p>Lorem Ipsum Dolor Item</p>
        </div>
        <button onClick={handleToolTip} type="button">
          Info
        </button>
      </section>
    </main>
  );
};

export default App;
