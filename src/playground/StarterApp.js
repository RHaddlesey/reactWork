console.log('App.js is running man!')

// JSX - JAVASCRIPT XML

const appTitle = {
  title: 'Indecision App',
  subtitle: 'Just some text man!',
  options: ['one','two']
};

// BELOW IS AN OBJECT - SO CONST CREATES AN OBJECT
const template = (
<div>
  <h1>{appTitle.title}</h1>
  {appTitle.subtitle && <p>{appTitle.subtitle}</p>}
  <p>{appTitle.options.length > 0 ? "Here are your options: " : "No options"}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
)

// seperates two functions

const user = {
  name: 'Richard',
  age: 131,
  location: 'J-Bad'
}

function getLocation (location) {
  if (location) {
    return <p>
             Location:
             {location}
           </p>
  }
}

const templateTwo = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.age && user.age >= 18) && <p>
                       {user.age}
                     </p>}
  {getLocation(user.location)}
</div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
// change this to templateTwo for the lower function to render

// Notes
// The turnary is for doing one of two things =
// user.name ? user.name : 'Anonymous'
// if it exists do this else do that 
// is there a user.name? yes = show user.name - no = show anonymous
//
// The logical and operater is for do one thing or nothing at all.
// By using () in the example below - we are running two lots of
// logical ands &&
// {(user.name && user.age >= 18) && <p>{user.age}</p>}
// First = if user.name exists check if it is  >= 18 = if not
// stop - if yes go on to next part = is user.age is >= 18 
// then return that age = else do nothing.