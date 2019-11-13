import React from 'react';

const SpecialButton = (props) => {
	console.log('special', props);
	return (
		<button>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{/* TO TRY LATER: <button className="button" onClick={() => props.click(props.special)}>{props.text}</button> */}
			{props.text}
		</button>
	);
};
export default SpecialButton;
