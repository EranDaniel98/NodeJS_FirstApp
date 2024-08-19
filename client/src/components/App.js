import React, { useState, useEffect } from 'react';
import { getBoxes } from '../services/apiService'
import { ColoredBox } from './ColoredBox'
import '../css/Styles.css';

const App = () => {
  const [boxes, setBoxes] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getBoxes()
      .then(data => setBoxes(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return (<div className="App">Error: {error}</div>);
  if (!boxes) return (<div className="App">Loading...</div>);

  return (
    <div className="App">
      <h1>Boxes to rule them all</h1>
      <div className="box-container">
        {boxes.map((box, index) => (<ColoredBox key={index} initialBox={box} />))}
      </div>
    </div>
  );
}

export default App;
