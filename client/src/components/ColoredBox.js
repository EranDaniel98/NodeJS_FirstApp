import React, { useState } from 'react';
import '../css/Box.css';

export const Colors = Object.freeze({
  BLUE: "blue",
  RED: "red",
})

export const ColoredBox = (box_obj) => {
  console.log(box_obj);
  const [currentColor, setColor] = useState(box_obj.color);

  const toggleColor = () => {
    setColor(prevColor => prevColor === Colors.BLUE ? Colors.RED : Colors.BLUE);
  };

  return (
    <div className={`box ${currentColor}-box`}>
      {box.text}
      <button onClick={() => toggleColor()}>Change Color</button>
    </div>
  )
}