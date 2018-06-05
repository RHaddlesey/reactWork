import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  

inputChangedHandler = ( event ) => {
  this.setState( { userInput: event.target.value } );
}

deleteCharHandler = ( index ) => {
  const text = this.state.userInput.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState( {userInput: updatedText});
}

  render() {
    const charList = this.state.userInput.split('').map((singleCh, index) => {
      return <Char 
      character={singleCh} 
      key={index} 
      clicked = {() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
      <p>Here we add a text box and validate the length of text to ensure it is above 5</p>
        <input type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;


/*
 NOTES
TASK 1 =create a user input field with a change listener which
outputs the full length of the input text - 
so the first thing is to put in an input box in the DOM by
creating an input method - here I use input text onChange

now we need to set up a method to take in inputChangedHandler
and store the input in the state = {}
via the event handler

we then 2-way bind the text by adding this.inputChangedHandler and 
adding a value of this.state.userInput
This will then always display the latest user input
we then show this output with the <p>

END OF TASK 1

TASK 2 create a new component which recieves the full text as a prop
 Validation connects to the component and passes the props based on
 the userinput length to it, so that the component can use the value

 TASk 5 = render a list of charComponents where each char recieves a different letter
 of the entered text (in the initial input field) as a prop
 now we import Char and place it in the DOM we need to assign it first in render
 before we return its output. we map the char list as an array of characters based on 
 the text that it recieves.

 map here is giving us a new array based on the original without changing the original
 our list is not a true javascript array and so we need to split the input and make it
 into an array that can then be mapped as a new array. We also need to assign a key to the map array.
 As we do not have one, we have to create an arbitrary key by adding the 
const charList = this.state.userInput.split('').map((singleCh, index) =
this sets up the array as singleCh (single characters and sets a value of index)
This is bit of a dirty cheat, but it makes the app work with no errors.

TASK 6 when you click a charComponent it should be removed from the list
I want to pass a new handler clicked to the deleteCharHandler method.
We then need to pass this back to the Char component and place it in the div
so now const text = this.state.userInput.split(''); will split the array into text
then we set text to splice index to get the 1 character to remove from the array
now it is split and 1 removed, we set a new variable updatedText to = the array 
re-joined minus the the one removed so that it is a string again. Then we reassign
userInput to = the new updatedText
*/