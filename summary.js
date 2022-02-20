//let and const 
const priyoPerson = 'amina begum';
let person = 'mamina begum';
person = 'begum';

//default parameter
function calculate(x, y, z = 1) {
    return x * y * z;
}
console.log(calculate(2, 3));

//template string
const myPeople = `My favourite person are ${person} and his old is ${calculate(2, 3)}. My name is ${priyoPerson}`;
console.log(myPeople);

//arrow function 
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

//spread operator
const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers);