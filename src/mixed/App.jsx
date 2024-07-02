import React from "react";
import ExampleToolTip from "./ExampleToolTip";
import ExampleCounter from "./ExampleCounter";

const App = () => {
  return (
    <>
      <main>
        <section>
          <ExampleCounter />
          <hr />
          <ExampleToolTip />
        </section>
      </main>
    </>
  );
};

export default App;
