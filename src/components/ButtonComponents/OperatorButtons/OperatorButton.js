import React from 'react';

const OperatorButton = (props) => {
	console.log(props);
	return (
		{
			/* Display a button element rendering the data being passed down from the parent container on props */
		},
		{
			/* TO TRY LATER: <button className="button" onClick={() => props.click(props.operator.value)}>{props.operator.char}</button> */
		},
		{
			/*React can only handle our primitive data types inside JSX - it doesn't know what to do with objects, so we have to go inside the object and get our char, which is the data we actually want to display. */
		},
		<button>{props.operator.char}</button>
	);
};

export default OperatorButton;
