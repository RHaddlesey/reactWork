import React from 'react'
import './UserInput.css'

const userInput = (props) => {
	
	


	return (
		<div className='UserInput'>
		<input
	type="text"
	onChange={props.changed} 
	value={props.currentType}
	/></div>,
	<div className='UserInput'>
		<input
	type="text"
	onChange={props.changed} 
	value={props.currentName}
	/>
	</div>,
	<div className='UserInput'>
		<input
	type="text"
	onChange={props.changed} 
	value={props.currentSize}
	/>
	</div>,
	<div className='UserInput'>
		<input
	type="text"
	onChange={props.changed} 
	value={props.currentColour}
	/>
	</div>	
	);

};


export default userInput;

/*NOTES - in order to have some text already in the input box -
we need to bind a prop = so we changed from this
const userInput = (props) => {
	return <input type="text" onChange={props.changed} />;

we now send this back to App as a prop

using inline styling here to make sure just this part of the user interface is styled
<input
	type="text"
	onChange={props.changed2} 
	value={props.currentType}
	/>
	</div>


*/
