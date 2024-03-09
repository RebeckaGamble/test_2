import React from 'react'
//todo: ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.

const ChildComponent = ({ selectedColor }) => {

  return (
    <>
    <select name="color" id="" onChange={(e) => selectedColor(e.target.value)}>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
    </select>
    </>
  )
}

export default ChildComponent