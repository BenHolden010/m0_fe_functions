// // Defining Our Own Functions
// // For each exercise below, write the function according to the requirements. 
// // Call each method at least twice and store the return value in a variable. 
// // Use console.log() to see the return value in the console.

// // 1: Write a function named greeting that returns a string with a general greeting. 
// function greeting(helloWorld) {
//     var helloWorld = "Hello world!!!"
//     return helloWorld;
// }

// console.log(greeting())
// console.log(greeting = " - said the computer.")

// // 2: Write a function named customGreeting that returns a greeting WITH a specific name.

// function customGreeting(person) {
//     return "It is nice to meet you " + person + "!";
// }
// console.log(customGreeting("Jimmy"))

// // 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
// function greetPerson(first, middle, last) {
//     return first + middle + last + "his name was my name too!"
// }
// console.log(greetPerson("john ", "jacobJinglhiemer " , "schmidt "))

// // 4: Write a function named square that takes in one number, and returns the square of that number.
// // BONUS: Print a sentence that interpolates the return value of your square function.

// function square(number) {
//     var four = number*number;
//     return four + " will always be a square number."
// }
// console.log(square(2))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, food) {
    if (quantity >= 4) {
        console.log(`${food} is stocked`) ;
    } else if (quantity >= 1) {
        console.log(`${food} is running low`);
    } else {
        console.log(`${food} is out of stock`);
    }
}
console.log(checkStock(2, "salsa"));

// checkStock(4, "Coffee");
// => "Coffee is stocked"

// checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// => "Salsa - running LOW"