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


// Spread operator
// Arrays

const originalArray = [1, 2, 3];
// const copyArray = originalArray.concat([]);
const spreadArray = [...originalArray, 4, 5, 6];
console.log(spreadArray);

function sumValues(a, b, c) {
    return a + b + c;
}

console.log(sumValues(...originalArray));

// Objects
const originalObject = {
    a: 1,
    b: 2,
    c: 3
};
const copyObject = {...originalObject};

const copyObjectWithNewValues = {...originalObject, a: 43};  // override a
console.log(copyObjectWithNewValues);


// Rest Parameters
function sumValuesRest(...values) {
    return values.reduce((acc, value) => acc + value);
}
console.log(sumValuesRest(1, 2, 3, 4, 5));

const newAddFunction = (firstNum, ...nums) => {
    return nums.reduce((acc, num) => acc + num);
}
console.log(newAddFunction(1, 2, 3, 4, 5));


// Destructuring
// from functions
const bob = {
    first: 'Bob',
    last: 'Smith',
    age: 30
};
const normalFunction = (obj) => {
    return `${obj.first} ${obj.last}`;
}
console.log(normalFunction(bob));

const destructuredFunction = ({first, last}, ...obj) => {
    console.log(first, last, obj);
    return `${first} ${last}`;
};
console.log(destructuredFunction(bob));

// Destructured assignment from objects
const {first, last} = bob;
console.log(first, last);

// Destructured assignment from arrays
const [one, two] = [1, 2, 3];
console.log(one, two);


// Default parameters
const defaultFunction = (a, b = 'default') => {
    return a + b;
}
console.log(defaultFunction(1));

