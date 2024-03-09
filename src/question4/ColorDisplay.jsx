import React, { useContext, useEffect } from "react";
import { ColorContext } from "./colorContext";

//todo: Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.
const ColorDisplay = () => {
  const { color, textColor, handleColor } = useContext(ColorContext);

  //text color
  useEffect(() => {
    handleColor(color);
  }, [color]);

  return (
    <>
      <p>
        You picked color:{" "}
        <span className={`${textColor} font-semibold uppercase`}>{color}</span>
      </p>
    </>
  );
};

export default ColorDisplay;
