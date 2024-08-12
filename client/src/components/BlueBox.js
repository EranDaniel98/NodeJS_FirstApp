// src/components/MyComponent.js
import React from 'react';
import './BlueBox.css'; // Optional: import CSS for styling

function BlueBox({text}) {
    let blue_box_html = (
        <div className="blue-box">
          <p>{text}</p>
        </div>
    );

  return blue_box_html

}

export default BlueBox;
