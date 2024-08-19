import React, { useState } from 'react';
import '../css/Box.css';

export const Colors = Object.freeze({
  BLUE: "blue",
  RED: "red",
})

export const ColoredBox = ({ box }) => {
  const [currentBox, setBox] = useState(box);

  const toggleColor = () => {
    setBox(prevBox => {
      const newBox = {...prevBox};
      newBox.color = prevBox.color === Colors.BLUE ? Colors.RED : Colors.BLUE;
      return newBox;
    });
  };

  return (
    <div className={`box ${currentBox.color}-box`}>
      {currentBox.text}
      <button onClick={() => toggleColor()}>Change Color</button>
    </div>
  )
}