// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// No arguments are passed; incluces() has one clear job which is to ask if this boolean expression is true or false.
// The return value is "true"
"Hello World".includes("Hello");

// No arguments are passed; endsWith() has one clear job which is to ask if this boolean expression is true or false.
// The return value is "false"
"Hello World".endsWith("Hello");

// No arguments are passed; andsWith() has one clear job which is to ask if this boolean expression is true or false.
// The return value is "true"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The endsWith() method is called on the cats variable, which stores the string object "meow". 
// The endsWith() method returns true if the data in the cats variable ends with the argument passed in.
// In this example, the return value is true, because "meow" does end with "w".
// The console.log() statements prints the return value of the endsWith() method (true) to the console.
var cats = "meow";
console.log(cats.endsWith("w"));

// The toLowerCase() method is called on the dogs variable, wghich stores the string object "Woof".
// The toLowerCase() method returns woof and changes the capital W to a lowercase w.
//  the console.log() statements prints the return value of the toLowerCase() method woof to the console. 
 var dogs = "Woof";
console.log(dogs.toLowerCase())


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


// the pop() method is assigned to the birds variable
// the pop() method removes the last element in an array and lists the rest of the elements.
// the console.log() statements print the return value of the pop() method fly, chirp

var birds = ["fly", "chirp", "flap"]; 
for (var i = 0; i < birds.length; i++) {
console.log(birds.pop());
}

// the shift() method is assigned to the bees variable
// the shift() method removes the first element in an array and lists the rest of the elements.
// the console.log() statements print the return value of the shift() method sting hover

var bees = ["buzz", "sting", "hover"]; 
for (var i = 0; i < bees.length; i++) {
console.log(bees.shift());
}

