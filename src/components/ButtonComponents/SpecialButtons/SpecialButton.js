import React from "react";

const SpecialButton = ({special}) => {
  return (
    <>
      <button>
      {special} {/* this is a string */}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default SpecialButton