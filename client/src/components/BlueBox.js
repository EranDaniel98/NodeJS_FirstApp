import React from 'react';
import '../css/BlueBox.css';

export const Colors = Object.freeze({
  BLUE:"blue",
  RED:"red",
})

export const ColoredBox = ({text, color}) =>{
  return (
    <div className={`${color}-box`}>{text}</div>
  );
}


// export default {ColoredBox, Colors};
