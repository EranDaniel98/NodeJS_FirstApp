import React, { useState, useEffect } from 'react';
import { ColoredBox } from './ColoredBox'
import '../css/App.css';


const App = () => {
  const [boxes, setBoxes] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await fetch('/api/boxes');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBoxes(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoxes();
  }, []);

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
