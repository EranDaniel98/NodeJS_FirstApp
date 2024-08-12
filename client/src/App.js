import React from 'react';
import BlueBox from './components/BlueBox'
import './App.css';

function App() {

  const boxes = Array.from({ length: 9 }, (_, index) => `${index + 1}`);

  return (
    <div className="App">
      <header>
        <h1>IT'S ALIVE!!</h1>
      </header>
      <main>
        <div class="box-container">
          {boxes.map((text, index) => (<BlueBox key={index} text={text} />))}
        </div>
      </main>
    </div>
  );
}

export default App;
