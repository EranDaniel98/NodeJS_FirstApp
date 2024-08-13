import React from 'react';
import '../css/Box.css';

export const Colors = Object.freeze({
  BLUE:"blue",
  RED:"red",
})

export const ColoredBox = ({text, color}) =>{
  return (
    <div className={`box ${color}-box`}>{text}</div>
  );
}
