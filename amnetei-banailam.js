//default parameter
function add(x, y = 0) {
    //option 1
    // if (y == undefined) {
    //     y = 0;
    // }
    //option 2
    // y = y || 0;
    //option 3(es6)
    // default parameter 
    return x + y;
}
console.log((add(5)));

//template literals (template strings)
const numbers = 2;
const numbers2 = 5;
function multiply(x, y) {
    return x * y;
}
//string interpolation
//before es6
const introduction = 'His name is Harun. He has ' + numbers + " childs. one's age is " + multiply(6, 2) + " and another one's age is " + multiply(3, 5) + '. Both read in class ' + numbers2;
//es6
const introduction2 = `His name is Harun. He has ${numbers} childs. One's age is ${multiply(6, 2)} and another one's age is ${multiply(3, 5)}. Both read in class ${numbers2}.`
console.log(introduction);
// multiline string
//before es6
const description = 'His name is alim bodda.\n' +
    'His brother name is shamim bodda.\n' +
    'His sister name is alima boddi.';
//es6
const description2 = `
His name is alim bodda.
His brother name is shamim bodda.
His sister name is alima boddi.
`
console.log(description2);
//function expression
const addTwo = function addTwo(x, y) {
    return x + y;
}
//anonymous function expression
const add1 = function (x, y) {
    return x + y;
}
//arrow function
// when we have two parameters and sigle line calculation(we don't need curly brackets and return statement)
const add2 = (x, y) => x + y;
//when we have multiple parameters and single line calculation
const multiply2 = (x, y, z) => x * y * z;
//when we have just single parameters and single line calculation
const fiveTimes = x => x * 5;
//when we have no parameters and single line calculation
const fullName = () => 'babul bhai';
//when we have no/single/double/multiple parameters and multiple line calculation
const totalCalculation = (x, y, z) => {
    const add = x + y;
    const substract = x - y;
    const substract2 = y - z;
    const multiply = x * y * z;
    const result = ((add + substract) - substract2 * multiply) / z;
    return result;
}
console.log((totalCalculation(10, 12, 15)));
//spread operator
const numbers5 = [0, 1, 2, 3, 4, 5, 6, 7];
// check max or min value
// console.log((Math.max(numbers5))); beacuse math method doesn't take array
console.log(...numbers5);
console.log((Math.max(...numbers5)));
//copy array in a new array
const numbers4 = [22, ...numbers5, 88];/*copy the original array and creates a new array.And add elements .it doesn't overwrite the original array*/
numbers5.pop();
console.log(numbers4);
console.log(numbers5);
//concat arrays
const concatNumbers = [...numbers4, ...numbers5];
console.log(concatNumbers);
