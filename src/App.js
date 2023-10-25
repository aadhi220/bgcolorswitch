import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("purple");
  const HandleBg = (e) => {
    e.preventDefault();
    const value = e.target.value;
    // console.log(value);
 setBgColor(value)
  };
  return (
    <div style={{backgroundColor:bgColor}} className="App">
      <h1>BackGround ColorSwitch</h1>
      <div className="btn-grp">
        <button value="red" onClick={(e) => HandleBg(e)} className="btn red">
          Red
        </button>
        <button value="blue"  onClick={(e) => HandleBg(e)} className="btn blue">
          Blue
        </button>
        <button value="green" onClick={(e) => HandleBg(e)} className="btn green">
          Green
        </button>
        <button value="black" onClick={(e) => HandleBg(e)} className="btn black">
          Black
        </button>
        <button value="yellow" onClick={(e) => HandleBg(e)} className="btn yellow">
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
