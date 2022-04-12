import "./App.css";
import ChooseColor from "./ChooseColor";
import ShowColor from "./ShowColor";
import { useState } from "react";

function App() {
  const [squareColor, setSquareColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const handleColorChange = (e) => {
    setSquareColor(e);
  };

  const handleTextColorChange = (e) => {
    if (e.toLowerCase() === "white") {
      setTextColor("black");
    } else {
      setTextColor("white");
    }
  };

  return (
    <div className="app">
      <ShowColor textColor={textColor} squareColor={squareColor} />
      <ChooseColor
        squareColor={squareColor}
        handleColorChange={handleColorChange}
        handleTextColorChange={handleTextColorChange}
      />
    </div>
  );
}

export default App;
