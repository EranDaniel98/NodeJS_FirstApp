import React, { useState, useEffect } from 'react';
import { ColoredBox, Colors } from './ColoredBox'
import '../css/App.css';


const App = () => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    fetch('/api/boxes')
      .then(response => response.json())
      .then(data => setBoxes(data))
      .catch(error => console.error('Error fetching boxes:', error));
  }, [])

  return (
    <div className="App">
      <div className="box-container">
        {boxes.map((box, index) => (<ColoredBox key={index} text={box.text} color={box.color} />))}
      </div>
    </div>
  );
}

export default App;
