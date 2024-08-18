import React, { useState, useEffect } from 'react';
import {fetchJson} from '../services/apiService'
import { ColoredBox } from './ColoredBox'
import '../css/App.css';


const App = () => {
  const [boxes, setBoxes] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchBoxes() {
    setLoading(true);
    fetch('/api/boxes')
      .then((response) => {
        if (!response.ok) setError('Network response was not ok');
        else return response.json();
      })
      .then((data) => setBoxes(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => fetchJson('/api/boxes'), []);

  if (loading) return <div className="App">Loading...</div>
  if (error) return <div className="App">Error: {error}</div>

  return (
    <div className="App">
      <h1>Boxes to rule them all</h1>
      <div className="box-container">
        {boxes.map((box, index) => (<ColoredBox key={index} text={box.text} color={box.color} />))}
      </div>
    </div>
  );
}

export default App;
