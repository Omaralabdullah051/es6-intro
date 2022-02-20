//function declaration
function add(num1, num2) {
    return num1 + num2;
}
//function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
//function expression (anonymous) --without function-name
const add3 = function (num1, num2) {
    return num1 + num2;
}
//arrow function
const add4 = (num1, num2) => num1 + num2;

console.log((add4(15, 17)));

// document.getElementById('my-btn').onclick = function handleEvent(){

// }



