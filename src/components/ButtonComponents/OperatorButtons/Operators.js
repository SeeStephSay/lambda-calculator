import React, { useState } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  console.log(operators);
  const [operatorData, setOperatorData] = useState(operators);
  // STEP 2 - add the imported data to state
  console.log(data);
  return (
    <div>
      {operatorData.map((operator, i) => {
        return <OperatorButton key = {i} operator = {operator.value}
      })}
      /* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
    </div>
  );
};
export default Operators;
