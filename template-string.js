const sakib = 'Asik Akbar';
const meye = "meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiline = 'this is my first line. \n' +
    'this is my second line.\n' +
    'third line text here.\n' +
    'fourth line text here.';


const multilineNew = `This is my multi line
this is second line
this is third line 
this is fourth line
`
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '  <h3 class="friend-name">firend-5</h3>';
const old2 = '  <h3 class="friend-name">firend-' + count + '</h3>';
//string interpolation
const new2 = `<h3 class="friend-name">firend-${count}</h3>   `;
//string interpolation 
const new1 = ` <h3 class="friend-name">firend-${friends.length}</h3>`

const first = 'aminul';
const last = 'Chowdhury';
const fullOld = 'This person name is: ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${friends.length * 500}. He lives in Dhaka`;


console.log(fullNew);