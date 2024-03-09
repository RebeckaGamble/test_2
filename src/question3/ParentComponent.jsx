import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
//todo: När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
//todo: ParentComponent ska visa användarens valda favoritfärg.

const ParentComponent = () => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const selectedColor = (color) => {
    setColor(color);
    handleColor(color);
  };

  const handleColor = (color) => {
    if (color === "red") {
      setTextColor("text-red-400");
    } else if (color === "blue") {
      setTextColor("text-blue-400");
    } else if (color === "purple") {
      setTextColor("text-purple-400");
    }
  };
  return (
    <div>
      <p>Pick your favourite color:</p>
      <ChildComponent selectedColor={selectedColor} />
      <p className="pt-4">
        You picked:{" "}
        <span className={`${textColor} font-semibold uppercase`}>{color}</span>
      </p>
    </div>
  );
};

export default ParentComponent;
