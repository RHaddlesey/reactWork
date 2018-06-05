import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
		<p>There once was a {props.userType} and it's name was {props.userName}.</p>
		<p>It was {props.userSize} with {props.userColour} eyes that would always stare at you!</p>
		</div>
		);


};

export default userOutput;

/* NOTES
The (props) pulls in the props from App so we can use it here
so userName is the prop we set up in App inside the <UserOutput> tag
we call the prop of that variable in {props.userName}
We cannot add state in here as we have a function - so we pop the state
inside App as it extends the component.

UserInput we applied an inline style here we will use an external CSS
*/
