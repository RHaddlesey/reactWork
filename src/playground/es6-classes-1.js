console.log('Im working dude')

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       // return 'Hi! I am ' + this.name + '!';
       return `Hi, my name is ${this.name}!`;
    }
    getDescription() {
        return `Hi, ${this.name} is ${this.age} years old!`;
    }
} 

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Thier major is ${this.major}`;
        }

        return description;
    }
}

// Traveler -> Person
// add support for homeLocation instead of major
// override getGreeting
// if
// 1. `Hi, my name is ${this.name}!` + I am visiting from .....
// or 
// 2. `Hi, my name is ${this.name}!`

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    homeLocation() {
        let home = super.getGreeting();

        if (this.hasLocation()) {
            home += ` I am visiting from ${this.location}.`;
        }

        return home;
    }
}

//const me = new Student('Dr Richard Haddlesey', 48, 'Digital Archaeology');
//console.log(me.getDescription());

//const other = new Student();
//console.log(other.getDescription());

const me = new Traveler('Dr Richard Haddlesey', 48, 'Poole');
console.log(me.homeLocation());

const other = new Traveler();
console.log(other.homeLocation());

//challenge - 
// set up constructure to take name and age with age default to 0
// getDescription - name is age years old! So default would be
// Anonymous is 0 years old! = got this really easy!


// Notes
// inside the class we create the constructor function that we then pass in an
// argument to it in the me const
// this grabs this instance of the class. so this.name is taken from the Person function
// this.name = name which is the arument we pass in elesewhere but name here.
// above in the code we comment out the return statement and instead use a template string 
// which is defined by using the back tick `` in which we can inject JSX
// Template Strings - nice and easy instead of 
// Concatination = return 'Hi! I am ' + this.name + '!'; everytime - we can create
// a template string that injects the JSX into the string by using
// return `Hi I am ${this.name}!`;

// Super = as Student extends the Person class - we can reuse the name and age already defined
// and just add major to the list. So in order to bring in the parent class - 
// we call super as a function () and pass in the arguments we want to use - name and age
// then we just add this.major and it will allow us to use all 3 but only define major 
// as the other two are defined in the parent class

// the return !!this.major only returns if empty string is false - so !'' returns true it is empty
// but !!'' means it is a false value = this is the logical NOT operator!
// so... '' would fail an if, so we can convert it to boolean by !'' which makes it true etc.

// in student we can call the getDescription method from the parent (Person) by using
// let description = super.getDescription(); so super accessess the parent and assigns it to description