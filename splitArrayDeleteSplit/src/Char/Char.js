import React from 'react';

const char = (props) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		margin: '16px',
		border: '1px solid black',
		textAlign: 'center'
	}
	return (
		<div style={style} onClick={props.clicked} >
			{props.character}
		</div>
	);

}

export default char;


/*
TASK 4
This recieves its props from app.js and styles it inline here
then returns it as a JavaScript array hence the {}

*/