import React from 'react';

// We want to create a number button as one component, and then use those buttons inside a larger number button layout (numbers) component.

// I want my button to display some text (to start with).

const NumberButton = (props) => {
	console.log('NumberButton', props);
	return (
		/* Display a button element rendering the data being passed down from the parent container on props */
		<button onClick={() => props.addNumber(props.text)} className='numberButton'>
			{props.text}
			{/*We can call our props whatever we want to.
        onClick={() => props.addNumber(props.text)}for trying onClick event later*/}
		</button>
	);
};

// Fragments, such as <></>, allow us to group our JSX elements together, without having to put them into a div.

export default NumberButton;
