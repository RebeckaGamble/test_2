import { createContext, useReducer, useState } from 'react';
//todo: Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

export const ColorContext = createContext()

export function ColorProvider({ children }) {
  const [color, setColor] = useState('')
  const [textColor, setTextColor] = useState('')

  function handleColor(color){
    if (color === "red") {
      setTextColor("text-red-400");
    } else if (color === "blue") {
      setTextColor("text-blue-400");
    } else if (color === "purple") {
      setTextColor("text-purple-400");
    }
  };
  /*
  function reducer(state, action){
    if(action.type == "setColor") {
      return {
        ...state, 
        color: action.color
      }
    }
    return state
  }*/

  //const [state, dispatch] = useReducer(reducer, {color: "green"})

  return (
    <ColorContext.Provider value={{ color, setColor, textColor, handleColor }}>
      {children}
    </ColorContext.Provider>
  )
}