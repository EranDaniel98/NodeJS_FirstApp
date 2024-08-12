import React from 'react';
import {ColoredBox, Colors} from './BlueBox'
import '../css/App.css';


const App = () => {
  const boxes = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="App">
      <h1>IT'S ALIVE!!</h1>
        <div className="box-container">
          {boxes.map((text, index) => (<ColoredBox key={index} text={text} color={Colors.BLUE}/>))}
          {boxes.map((text, index) => (<ColoredBox key={index} text={text} color={Colors.RED}/>))}
        </div>
    </div>
  );
}

export default App;
