import React, { useState } from 'react';
import { numbers } from '../../../data'; //Named exports - have to use the exact name of the variable in the data file.
import NumberButton from './NumberButton'; //Default exports don't require curly brackets.

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
	// STEP 2 - add the imported data to state
	const [ buttonNumbers, setButtonNumbers ] = useState(numbers);
	console.log('numbers', props); //Will have addNumber as a key and a value of the function we have passed down.

	return (
		<div className='numbers'>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
			it any props needed by the child component*/}
			{buttonNumbers.map((number) => <NumberButton key={number} text={number} addNumber={props.addNumber} />)}
			{/*//NumberButton is a callback function*/}
			{/*//Map is an expression that will create a bunch of components at once for us.
			click={props.click} to add to try onClick later*/}
		</div>
	);
};

export default Numbers;
