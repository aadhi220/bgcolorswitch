import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("purple");
  const [isChanging, setIsChanging] = useState(false);

  const HandleBg = (color) => {
    setBgColor(color);
  };

  const setRandomColor = () => {
    setIsChanging(true);
  };

  useEffect(() => {
    if (isChanging) {
      const intervalId = setInterval(() => {
        const randomColor = getRandomColor();
        setBgColor(randomColor);
      }, 100);

      return () => {
        clearInterval(intervalId);
        setIsChanging(false);
      };
    }
  }, [isChanging]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="App">
      <h1>Background Color Switch</h1>
      <div className='btn-grp'>
        <button onClick={() => HandleBg('red')} className="btn">Red</button>
        <button onClick={() => HandleBg('blue')} className="btn">Blue</button>
        <button onClick={() => HandleBg('green')} className="btn">Green</button>
        <button onClick={() => HandleBg('black')} className="btn">Black</button>
        <button onClick={() => HandleBg('yellow')} className="btn">Yellow</button>
       {isChanging ?  <button onClick={()=>setIsChanging(false)} className="btn">Stop</button>: <button onClick={setRandomColor} className="btn">Light Show</button>}
      </div>
    </div>
  );
}

export default App;
