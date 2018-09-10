/* 
Section: 2 - Const & Let
Const
- const is used for variables that should not change
- const has to always declare the variable
- when using const as an object, the key and value may still be changed
- use const on every variable UNLESS you know it needs to be changed, if so, use keyword 'let'

Let
- let is used when you want to reassign value to a variable
*/

// Question #1
let x = 2;
let x = 'hello';
console.log(x);
// a 'Duplicate declaration "x" runtime exception will be thrown


// Question #2
const x = 1;
const x = 'hello';
console.log(x);
// a 'Duplicate declaration "x" runtime exception will be thrown


// Question #3
const x;
x = 1;
console.log(x);
// an 'Unexpected token (1:7)' runtime exception will occur