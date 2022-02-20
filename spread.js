const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
console.log(...numbers);

//Math method isn't works on array.so we need to use spread operator;
const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

// copy the elements and also add;and returns a new array; it doesn't change the original array
const numbers2 = [22, ...numbers, 88];
numbers.push(55);
numbers.push(87);
console.log(numbers);
console.log(numbers2);


const numbers3 = [...numbers, 88];
console.log(numbers3);
