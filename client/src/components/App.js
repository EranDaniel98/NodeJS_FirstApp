import React from 'react';
import Boxes from './BlueBox'
import '../css/App.css';


const App = () => {
  const boxes = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="App">
      <h1>IT'S ALIVE!!</h1>
        <div className="box-container">
          {boxes.map((text, index) => (<Boxes.BlueBox key={index} text={text} />))}
          {boxes.map((text, index) => (<Boxes.RedBox key={index} text={text} />))}
        </div>
    </div>
  );
}

export default App;
