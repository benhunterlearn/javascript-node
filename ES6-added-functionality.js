/* ES6 Added functionality */

// Arrow functions
const exampleFunction = mun => num * 2;

// let and const
let exampleLet = 'example';
exampleLet = 10;

{ // block scope
    let exampleLet = 'example';
}
// exampleLet = 'example'; // error - let is block scoped

const exampleConst = 'example';
// exampleConst = 10; // error - const is constant
const exampleConstObject = {};
exampleConstObject.example = 'example';  // ok


// Template literals
let templateLiteral = `This is a template literal`;
console.log(templateLiteral);
templateLiteral = `This is a template literal with ${exampleLet}`;
console.log(templateLiteral);

// for...of loop
const exampleArray = [1, 2, 3];
for (const item of exampleArray) {
    console.log(item);
}
