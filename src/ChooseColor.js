import React from "react";

const ChooseColor = ({
  squareColor,
  handleColorChange,
  handleTextColorChange,
}) => {
  return (
    <form>
      <input
        onChange={(e) => {
          handleColorChange(e.target.value);
          handleTextColorChange(e.target.value);
        }}
        type="text"
        placeholder="Add color name"
        value={squareColor}
      />
    </form>
  );
};

export default ChooseColor;
