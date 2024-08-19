import React, { useState, useEffect } from 'react';
import { fetchJson } from '../services/apiService'
import { ColoredBox } from './ColoredBox'
import '../css/App.css';

const App = () => {
  const [boxes, setBoxes] = useState(undefined)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJson('boxes')
      .then(data => setBoxes(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (<div className="App">Loading...</div>)
  if (error) return (<div className="App">Error: {error}</div>)

  return (
    <div className="App">
      <h1>Boxes to rule them all</h1>
      <div className="box-container">
        {boxes.map((box, index) => (<ColoredBox key={index} box_obj={box} />))}
      </div>
    </div>
  );
}

export default App;
