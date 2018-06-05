import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username: '* Add name *',
    usertype: '* Creature type *',
    usersize: '* Creature size *',
    usercolour: '* Creature colour *'
  }//this is lowercase to show it is NOT a prop taken in but different as it is a changed state
  //that is why it is all lowercase and not camelCase. NOTE we have to put the state in here
  //because it extends the component. To pass that as a prop in the render method below


 
 usertypeChangedHandler = (event) => {
    this.setState({usertype: event.target.value});
};
usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
};
usersizeChangedHandler = (event) => {
    this.setState({usersize: event.target.value});
};
usercolourChangedHandler = (event) => {
    this.setState({usercolour: event.target.value});
};
//this is where the change takes place that is then output below in {this.state.username} 
//we need to pass this and bind it. So we set the state above, then here we take the 
//set state and manipulate it. You do not want to do that when we set the state, only after.

toggleViewHandler = () => {
    const doesShow = this.state.showView;
    this.setState({showView: !doesShow});
  }


  render() {
    return (
      <div className="App">
        
          <p>Add a creature type: </p>
        <UserInput
        changed={this.usertypeChangedHandler}
        currentName={this.state.usertype} /> 
         <p>Add a name for it: </p>
        <UserInput
        changed={this.usernameChangedHandler}
        currentName={this.state.username} /> 
         <p>how big is it? </p>
        <UserInput
        changed={this.usersizeChangedHandler}
        currentName={this.state.usersize} /> 
        <p>what colour eyes does it have?</p>
        <UserInput
        changed={this.usercolourChangedHandler}
        currentName={this.state.usercolour} /> 
        
        <p>Now click...</p><button onClick={() => this.toggleViewHandler()}>Show story</button>
        {this.state.showView === true ?
          <div>
        <UserOutput userType={this.state.usertype} 
        userName={this.state.username}  
        userSize={this.state.usersize} 
        userColour={this.state.usercolour} />
        </div> : null
      }
        
    
        
      </div> //{this.usernameChangedHandler} is a reference {this.usernameChangedHandler()} means it will execute
      //so we set up changed to = the state change above. We create a prop that is then sent to 
      //UserInput so the prop can be used in that component. Likewise - we use the initial set state of username 
      //of SuperRich as a prop sent to UserOuput. BUT...when the input box is typed into, it will automatically
      //update the DOM with the new Username as it is typed in by the user.
      //current name binds the original value of username into the text box before it is over written
      //by the user input
    );
  }
}

export default App;

/* NOTES
So that we can change and update the output based on the new input ... we need an event handler method
usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});

*/