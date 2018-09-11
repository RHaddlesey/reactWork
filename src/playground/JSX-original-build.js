console.log('App.js is running man!')

// JSX - JAVASCRIPT XML

const app = {
    title: 'Indecision App',
    subtitle: 'Just some text man!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option)
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app')


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map((optionList) => <li key={optionList}>Option: {optionList}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
};

render();



// NOTES
// (e) is the event object = e.preventDefault() is used to prevent the form from rendering the whole page
// <form onSubmit={onFormSubmit}> instead of <form onSubmit={onFormSubmit()}> because we do not want to call
// the onFormSubmit method as that would just return undefined as it would keep returning an empty/cleared form
// so we just want to reference the contents and call the method/function. e.target targets the data from the event (e)
// in this case it is the form. We get for option = event - its elements - the const - its value
// then we test if there is a vaule - then we set it back to an empty string.
// The origonal line was app.options.map((optionList) => {
//return <li key={optionList}>Option: {optionList}</li>;
//      }) - but we can use => to shorten it to what we have above
