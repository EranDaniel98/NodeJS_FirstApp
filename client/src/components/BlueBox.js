import React from 'react';
import '../css/BlueBox.css';

const BlueBox = ({ text }) => {
  return (
    <div className="blue-box">{text}</div>
  );
}

const RedBox = ({ text }) => {
  return (
    <div className="red-box">{text}</div>
  );
}

export default {BlueBox, RedBox};
