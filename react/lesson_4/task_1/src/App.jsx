import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-10} interval={500} />
      <Counter start={100} interval={1500} />
    </>
  );
};

export default App;
