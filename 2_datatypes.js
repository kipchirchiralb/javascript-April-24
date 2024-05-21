// Data Types define the kind of information a variable can hold
// there are two main categories of data types in js
// Primitives/simple data types :- String, Number, BigInt, Boolean, Undefined, Null
// Primitive data types hold a single value
let age = 25
let maxNum = 98436427462n // n at the end labels this to memory as of type bigint
let isPresent = false
let user = "james"
let startingPoint = null
let city = "Eldoret"
// We can use the typeof operator to check the data type of a value/variable
console.log(typeof age);

// Assignment: Differentiate between undefined and not defined in js

// Non-Primitive/Composite/Complex/Reference data types ;- object, array, function
// non-primitive data types are more complex and store collections of data
let car = {
    brand: "Toyota",
    model: "Vitz",
    year: 2024,
    locallyAssembled: true,
    color: "red"
}
// car is an object
console.log(car);
console.log(typeof car);
// objects are made up of key-value pairs separated by a comma
// the key and the value are separated bu a full-collon
// We use either bracket notation or dot notation to access individual values stored in an object
// for example:- to check the color of the car
console.log( car.color ); // dot notation
// to check the car brand
console.log( car["brand"] ); // bracket notation
// dot notation is considered a cleaner option by most developers and bracket notation is used on need basis. 
//ARRAY,function