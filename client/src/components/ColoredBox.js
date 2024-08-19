import React, { useState } from 'react';
import '../css/Box.css';

export const Colors = Object.freeze({
  BLUE: "blue",
  RED: "red",
})

export const ColoredBox = ({ initialBox }) => {
  const [box, setBox] = useState(initialBox);

  const toggleColor = () => {
    setBox(prevBox => {
      const newBox = {...prevBox};
      newBox.color = prevBox.color === Colors.BLUE ? Colors.RED : Colors.BLUE;
      return newBox;
    });
  };

  return (
    <div className={`box ${box.color}-box`}>
      {box.text}
      <button onClick={() => toggleColor()}>Change Color</button>
    </div>
  )
}
