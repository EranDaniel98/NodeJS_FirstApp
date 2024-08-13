import React, { useState } from 'react';
import '../css/Box.css';

export const Colors = Object.freeze({
  BLUE: "blue",
  RED: "red",
})

export const ColoredBox = ({ text, color }) => {
  const [currentColor, setColor] = useState(color);

  const toggleColor = () => {
    setColor(prevColor => prevColor === Colors.BLUE ? Colors.RED : Colors.BLUE);
  };

  return (
    <div className={`box ${currentColor}-box`}>
      {text}
      <button onClick={() => toggleColor()}>Change Color</button>
    </div>
  )
}