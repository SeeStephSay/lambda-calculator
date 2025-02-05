import React, { useState } from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';

function App() {
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should receive 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	const [ displayValue, setDisplayValue ] = useState('0');
	const [ operatorValue, setOperatorValue ] = useState('');
	// Our setState value can take one of two arguments. The value we want to be put inside the variable, or a callback function that will give us the most up-to-date value.

	const addNumber = (number) => {
		if (operatorValue === '=') {
			setDisplayValue(number);
		} else {
			setDisplayValue((displayValue) => displayValue + number);
		}
	};

	const addOperator = (operator) => {
		if (operator === '=') {
			setDisplayValue((display) => eval(display));
		} else {
			setDisplayValue((display) => `${display} ${operator} `);
		}
		setOperatorValue(operator);
	};

	return (
		<div className='container'>
			<Logo />
			<div className='App'>
				{/*The div has a key called className, which has a value of "App".*/}
				{/* STEP 4 - Render your components here and be sure to properly import/export all files */}
				<Display /*value={display}*/ number={displayValue} />
				{/*The above code is equal to our function with a key and value as a parameter: Display({number: 0})
				All of the props that we write are a key on the left and a value on the right side, and they all end up inside the props object. But we get to write them like attributes, just like we would in our normal HTML.*/}
				<Specials />
				<Numbers addNumber={addNumber} />
				{/*//We can't add onClick directly to a Component, because we are actually interacting on the site with our HTML elements.*/}
				<Operators addOperator={addOperator} />
			</div>
		</div>
	);
}

export default App;
