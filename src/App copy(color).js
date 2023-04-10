import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const[color, setColor] = useState('lightgray');
  const changeColor = (color) =>{
    console.log(color);
    setColor = (color);
  }
  return (
    <div className="App container">
      <h1>Color App</h1>
        <div 
        className="color-box"
        style={{backgroundColor: color}}
  
        >color box</div>   
        <div className="btn-group">
          <button onClick={function(){changeColor('red')}}>red</button>
          <button onClick={function(){changeColor('blue')}}>blue</button>
          <button onClick={function(){changeColor('green')}}>green</button>
        </div>
    </div>
  );
}

export default App;
