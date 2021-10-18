import "./App.css";
import Number from "./Components/Number";
import React, { useState } from "react";
import Button from "./Components/Button.js";

function App() {
  const [boxNum, setBoxNum] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
  ]);

  const incrementar = () => {
    if (boxNum[4].number < 20) {
      const nextBoxNum = boxNum.map((element) => {
        const container = {};
        container.number = element.number += 1;
        container.id = element.id += 1;

        return container;
      });
      setBoxNum(nextBoxNum);
    }
  };

  const decrementar = () => {
    if (boxNum[0].number > 0) {
      const nextBoxNum = boxNum.map((element) => {
        const container = {};
        container.number = element.number -= 1;
        container.id = element.id -= 1;

        return container;
      });
      setBoxNum(nextBoxNum);
    }
  };

  return (
    <>
      <Button text="<<" actionOnClick={decrementar} />
      {boxNum.map((box) => (
        <Number key={box.id} number={box.number} />
      ))}
      <Button text=">>" actionOnClick={incrementar} />
    </>
  );
}

export default App;
