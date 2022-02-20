const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log((multiply(4, 12, 3)));

const tenTimes = (num) => num * 10;
console.log((tenTimes(17)));

const fiveTimes = num => num * 5;
console.log((fiveTimes(5)));

const getName = () => 'Brandon Sam';
console.log((getName()));

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
console.log((doMath(12, 5)));

//anonymous function
document.getElementById('my-btn').addEventListener('click', function (event) {

})
// or in arrow function 
document.getElementById('my-btn').addEventListener('click', event => {

})