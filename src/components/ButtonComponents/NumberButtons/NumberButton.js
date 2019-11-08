import React from "react";

const NumberButton = (props) => {
  return (
    console.log("NumberButton", props),
      /* Display a button element rendering the data being passed down from the parent container on props */
      <button className="numberButton" onClick={() => props.addNumber(props.text)}>
      {props.text}
      </button>
  );
};

export default NumberButton;