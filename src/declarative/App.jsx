import React, { useState } from "react";
import { Button } from "./components/Button";
import { Banner } from "./components/Banner";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandlerOpen = () => {
    setIsVisible(true);
  };

  const clickHandlerClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <h1>Declarative Example</h1>
      <Button onClick={clickHandlerOpen}>Open Banner</Button>
      <Banner closeHandler={clickHandlerClose} isVisible={isVisible} />
    </>
  );
};

export { App };
