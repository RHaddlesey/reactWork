// arguments object - no longer bound with arrow functions
// ES 5

// const add = function (a,b) {
//    console.log(arguments)
//    return a + b
// }
// console.log(add(55,1))

// AS ES6
const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
// so if for some odd reason you need to access the arguments
// you will need to use ES5 and not ES6 or 7
console.log(add(55, 1))

// ---------------
// this keyword - nolonger bound 

// ES 5

const user1 = {
  name1: 'Richard',
  cities1: ['Weymouth', 'Phoenix', 'San Francisco', 'Bournemouth'],
  printPlacesLived1: function () {
    const that = this

    this.cities1.forEach(function (city1) {
      console.log(that.name1 + ' has lived in ' + city1)
    })
    console.log('END OF LIST')
  }
}
user1.printPlacesLived1()
// in order to make the above work, we need to use a 'work-around' by adding a new variable to hold
// the this to that because the function is bound to the property because the 2nd function
// is nested the this will not work as it is bound to the first function method - 
// hence the this = that to bring down the that. That is ES 5 for you! in ES 6 below - 
// the value is not bound.

const user = {
  name: 'Richard',
  cities: ['Weymouth', 'Phoenix', 'San Francisco', 'Bournemouth'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived())

// so... like var - we tend to never need the function keyword any more in ES 6
// arrow functions are the way forward! You can still use function, but arrows are
// just cleaner and work better
// the above app was very much like the ES 5 version, but I then took out 'forEach'
// and replaced it with .map as this works better in ES 6
// the map returns new arrays on the array so you can do things with what is returned 
// in the map that you cannot with the forEach

// ------------------------

// Challenge area

const multiplier = {
  // [numbers]
  numbers: [5345, 74754, 67568768],
  multiplyBy: 5475643,
  multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
  }
  // multiply by a single number
  // multiply  - return a new array were the numbers have been multiplied (map)
};

console.log(multiplier.multiply());
// so [1, 2, 3] 2 = [2, 4 , 6]

// so we get an array of numbers and a number toi multiplyBy
// we then set a function - multiply to return this number array and
// map it to a new array = number. Then we take the new array and
// multiply it by the number stored in multiplyBy
// then we set up a console.log to run the function in the multiplier const
