import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button op-btn" onClick={() => props.click(props.operator.value)}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;
