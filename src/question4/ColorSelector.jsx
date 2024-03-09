import React, { useContext } from "react";
import { ColorContext } from "./colorContext";
//todo: Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

const ColorSelector = () => {
  const { setColor } = useContext(ColorContext);

  return (
    <div>
      <p>select color: </p>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
};

export default ColorSelector;
