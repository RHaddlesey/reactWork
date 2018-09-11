console.log('Hello, World! Dr H Web Dev 2018')


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
    options: []
    };
  }


handelDeleteOptions () {
  this.setState(() => {
    return {
      options: []
    };
  });
}

handlePick () {
  const randNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randNum];
  alert(option)
}

// below will only work if there is an empty string - as in the opposite of an option
handleAddOption(option) {
  if (!option) {
    return 'Please, enter a valid option to the list';
  } else if (this.state.options.indexOf(option) > -1) {
    return 'Sorry, this option already exists';
  }

  this.setState((prevState) => {
    return {
      options: prevState.options.concat(option)
    }
  })

}

  render () {
    const title = 'Indecision';
    const subtitle = 'Put your decisions in the hands of a computer!';
  

    return (
      <section>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
           options={this.state.options}
           handelDeleteOptions={this.handelDeleteOptions}
           />
        <AddOption
          handleAddOption={this.handleAddOption}
         />
      </section>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handelDeleteOptions}>Remove all options</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}
  

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  

  render() {
    return (
      <div>
       {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// handelDeleteOptions
// in options we reference the function and NOT call it (so no ())
// it gets called when the button gets clicked. Then it will call the method 
// that lives above that sets the state to an empty array []
// we also need to bind this to the right instance in the constructor
// so we can delete all te array by = 
// taking a method passing it down into a child component and having it called 
// in there so that allows us to reverse the data flow and pass data up to the 
// parent by sharing a function

// Adding options
// we do not want to change the state of the array so we do not want to push
// any new options onto the option array. Instead we want to concatinante 
// the new option onto the existing array

// the 2nd build of this app saw us move over to class based components. 
// In the 3rd build we convert some of those to stateless functional components.