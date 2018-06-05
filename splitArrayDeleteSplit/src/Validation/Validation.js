import React from 'react';


const validation = (props) => {
	let validationMessage = 'Text just right';

	if (props.inputLength <= 5) {
		validationMessage = 'Text a little too short';
	}

	return (
		<div>
			<p>{validationMessage}</p>
		</div>
		)
};

export default validation;


/*
NOTES 
TASK 2 = this is taking in the props from the userInput
it then counts the input and when you get over 5 chracters = 
it will change the output from too short to just right
*/



/* as we want to avoid turnary expresions in React I have 
changed the simple expresion
	{

			props.inputLength > 5 ?
				<p>Text length is good!</p> :
				<p>text too short!</p>
	}

	into the one above

TASK 3 - output too short or not long enough depending on the length of the input <5

*/