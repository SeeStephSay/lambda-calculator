import React, { useState } from 'react';
import { operators } from '../../../data.js';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
	const [ operatorData, setOperatorData ] = useState(operators);
	// STEP 2 - add the imported data to state
	return (
		<div className='operators'>
			{operatorData.map((operator, index) => {
				return <OperatorButton key={index} operator={operator.value} click={props.click} />; //Do I need value here?
			})}
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component */}
		</div>
	);
};
export default Operators;
