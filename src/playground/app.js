console.log('Hello, World! Dr H Web Dev 2018')


class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
	    const options = JSON.parse(json);

		  if (options) {
			  this.setState(() => ({ options }));
		  }
    } catch (e) {

    }
  }

  // we only want this to fire if the array is different
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

	handlePick() {
		const randNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randNum];
		alert(option);
	}

	// below will only work if there is an empty string - as in the opposite of an option
	handleAddOption(option) {
		if (!option) {
			return 'Please, enter a valid option to the list';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	}

	render() {
		const subtitle = 'Put your decisions in the hands of a computer!';

		return (
			<section>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption} />
				<AddOption handleAddOption={this.handleAddOption} />
			</section>
		);
	}
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};


const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
}


const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove all options</button>
        {props.options.length === 0 && <p>Please, add an option to get started!</p>}
        {
          props.options.map((option) => (
            <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
}

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
}


class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    
    if (!error) {
      e.target.elements.option.value = '';
    }
		
	}
// the above will clear the input field if the data was valid

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp options={['Learn react.js', 'Learn vue.js']}/>, document.getElementById('app'));


// handleDeleteOptions
// in options we reference the function and NOT call it (so no ())
// it gets called when the button gets clicked. Then it will call the method 
// that lives above that sets the state to an empty array []
// we also need to bind this to the right instance in the constructor
// so we can delete all the array by = 
// taking a method passing it down into a child component and having it called 
// in there so that allows us to reverse the data flow and pass data up to the 
// parent by sharing a function

// Adding options
// we do not want to change the state of the array so we do not want to push
// any new options onto the option array. Instead we want to concatinante 
// the new option onto the existing array

// REMOVING SINGLE OPTIONS and PROP CHAINING
// now we need to set up a new method that will take in the option you want to delete
// then use setState to remove just that option from the rendered list.
// so we bind it to the parent then we need to prop chain it through into options
// as we do not have access directly to option

// so, most of the time we set up a method like handleDeleteOptions and then passed 
// that down a layer to options and then called it when you click remove All
// but with deleteOption we pass it down several layers and set up a function to make sure 
// it is passed into the button 
        //  <button
        //   onClick={(e) => {
        //     props.handleDeleteOption(props.optionText);
        //   }}
        // >

// THE LIFE CYCLE METHOD
// here we employ a react internal method to fire the lifecycle method using componentDidMount
// componentdidUpdate and componentWillUpdate amongst others. This will allow us to store data in a database
// - or in this case - in local storage. These will only work in class based components as they
// work with state. Local storage will only work with strings, so if we try to add a number
// it will convert that over to a string. So, in order to use an array for instance, 
// we need to use JSON (JavaScriptObjectNotation)
// JSON.stringify will take the JSX object and convert it to a string
// JSON.parse will take the JSON string and convert it back to an object