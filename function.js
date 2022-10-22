// 1. Create function.js where you have to define two functions, one the traditional js function and
// then a fat arrow function. Perform string manipulation or array manipulation or anything that you
// want, but make sure you use functions and call them. Also have some required and optional
// paramters.


import { largest } from "./second.js";


var add = (num1, num2) => {
    let sum = num1 + num2;
    return sum
}

function welcome(name, age = 18) {
    console.log(`Hi ${name}. You're ${age} years old?`)
}

console.log("TASK 1")
welcome("Anas", 17)
console.log(add(34, 35))

console.log("TASK 2")
console.log(largest(4, 2, 0));


// 3. Declare an array containing numbers, pass that array to a function and add n to every
// element. Let's say you have an array [1, 3 , 7]. Pass this array to a function, and pass n, which
// can be any integer. Now, return another array from the function which adds n to every element.
// So if n is 2, the new array is [3, 5, 9].
console.log("TASK 3")

var myArr = [1, 2, 3, 4, 5]
var newArr = []

myArr.forEach((element, index) => {
    // console.log(element, index);
    element *= element
    newArr.push(element)
})

console.log(myArr);
console.log(newArr); // NEW ARRAY IS THE SQUARE OF ELEMENTS IN myArr





// 4. Array: take an array of string and store 10 names inside it. Use map, filter and forEach to get
// an array of names whose length is less than 6.
console.log("TASK 4")

var namesArr = ["dinesh", "siddharth", "akaash", "anas", "vishwa", "aparna", "rishi", "sohan", "rose", "liyamary"]

// USING FILTER
function checkLength(elem) {
    return elem.length < 6
}
var filteredArr = namesArr.filter(checkLength)
console.log(filteredArr);

// console.log(namesArr.map((name)=>{
//     checkLength(name)
// }))



