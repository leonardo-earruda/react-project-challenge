import React from "react";

const ShowColor = ({ squareColor, textColor }) => {
  return (
    <section
      className="square"
      style={{ backgroundColor: squareColor, color: textColor }}
    >
      {!!squareColor ? squareColor : "Empty value"}
    </section>
  );
};

export default ShowColor;
