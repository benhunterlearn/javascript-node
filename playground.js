function average() {
    let sum = 0;
    for (let argument of arguments) {
        sum += argument;
    }
    let average = Math.ceil(sum / arguments.length);
    return average;
}

console.log(average(1,1,1,1,1))
console.log(average(1,2,3,4,5))

// Print each line preceded by "Hello".
var lines = [
    "It's me.",
    'Can you hear me?',
    'from the other side',
    'from the outside'
];
// console.log(lines.join('\n'));
// lines.forEach(line => console.log(line));
lines.forEach(line => console.log('Hello ' + line));

var person = {
    firstName: "Bruce",
    lastName: "Wayne",
    favoriteColors: ["black", "yellow"]
  };

// Bruce Wayne's second favorite color is:
console.log(person.favoriteColors[1]);

// How can we update Bruce Wayne's second favorite color to pink?
person.favoriteColors[1] = "pink";

var superHero = {
    name : "Bruce Wayne",
    alias: "Batman"
}
// Help hide our superhero's identity by deleting any identifying information from this object:
delete superHero.name;

if (typeof [] === 'object') {
    console.log('array');
}

if (typeof {} === 'object') {
    console.log('object');
}

if (Array.isArray([])) {
    console.log('array');
}

if (Array.isArray({})) {
    console.log('object');
}

var person = {
    firstName: "Homer",
    middleName: "Jay",
    lastName: "Simpson"
};

// for-in loop
for (var key in person) {
    console.log(key);
    console.log(person[key]);
}

// for-of loop
for (var value of Object.values(person)) {
    console.log(value);
}

// https://pythontutor.com/javascript.html#code=var%20person%20%3D%20%7BfirstName%3A%20%22Alexander%22%7D%0Avar%20anotherPerson%20%3D%20person%3B%0A%0AanotherPerson.lastName%20%3D%20%22Hamilton%22%3B%0Aperson.motto%20%3D%20%22There's%20a%20million%20things%20I%20haven't%20done.%22%3B&curInstr=4&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D
var person = {firstName: "Alexander"}
var anotherPerson = person;

anotherPerson.lastName = "Hamilton";
person.motto = "There's a million things I haven't done.";

console.log(person);
console.log(anotherPerson);
console.log(person === anotherPerson);  // true


// Array slice and splice, push and pop.
// Don't forget about shift and unshift.
// https://pythontutor.com/javascript.html#code=var%20cats%20%3D%20%5B%5D%3B%0Avar%20catsCurrentLength%20%3D%20cats.length%3B%0Acats.push%28%22Parker%22%29%3B%0Acats.push%28%22Matt%22%29%3B%0AcatsCurrentLength%20%3D%20cats.push%28%22Elie%22%29%3B%0Acats.push%28%22Tim%22%29%3B%0AcatsCurrentLength%20%3D%20cats.push%28%22Janey%22%29%3B%0A%0Avar%20lastOneIn%20%3D%20cats.pop%28%29%3B%0Acats.pop%28%29%3B%0Acats.pop%28%29%3B%0A%0AcatsCurrentLength%20%3D%20cats.length%3B%0A%0Acats.push%28%22Alexander%22%29%3B%0Acats.push%28%22Eliza%22%29%3B%0A%0Alet%20oldCats%20%3D%20cats.slice%280,2%29%3B%0Alet%20newCats%20%3D%20cats.slice%282,4%29%3B%0A%0Avar%20newCatsAlone%20%3D%20cats.splice%282,2%29%3B%0AcatsCurrentLength%20%3D%20cats.length%3B&curInstr=14&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

var cats = [];
var catsCurrentLength = cats.length;
cats.push("Parker");
cats.push("Matt");
catsCurrentLength = cats.push("Elie");
cats.push("Tim");
catsCurrentLength = cats.push("Janey");

var lastOneIn = cats.pop();
cats.pop();
cats.pop();

catsCurrentLength = cats.length;

cats.push("Alexander");
cats.push("Eliza");

let oldCats = cats.slice(0,2);
let newCats = cats.slice(2,4);

var newCatsAlone = cats.splice(2,2);
catsCurrentLength = cats.length;
// end cats example

// Object hasOwnProperty and Object.keys
var person = {name: "Watson"};
person.hasOwnProperty("name");  // true
person.hasOwnProperty("height");  // false
var person = {
    firstName: "Bruce",
    lastName: "Wayne"
};

Object.keys(person);  // ["firstName", "lastName"]

var superheroes = [
    {
    name: "Spider-Man",
        alterEgo: {
            first: "Peter",
            last: "Parker"
        },
        age: 15,
        address: {
            country: "USA",
            city: "New York"
        },
        favoriteColors: ["blue", "red"]
    },
    {
    name: "Batman",
        alterEgo: {
            first: "Bruce",
            last: "Wayne"
        },
        age: 32,
        address: {
            country: "USA",
            city: "Gotham"
        },
        favoriteColors: ["black", "yellow"]
    }
];

superheroes[1].alterEgo.first; // "Bruce"
superheroes[0].favoriteColors[1]; // "red"
superheroes[1].age; // 32

// Nested Objects
let data = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
};
// The email of user 1.
data.users[0].email;
// The title of user 5.
data.users[2].title;
// The user id of the first user in the users array.
data.users[0].user_id;

// Javascript Exercises from Learn Content
// get the index of the first time char is in the string
function getIndexOf(char, str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
          return i;
        }
    }
  return -1;
}

// get the length of string without using .length
function getStringLength(string) {
    let count = 0;
    // string.forEach(() => count++);
    for (const char in string) {
        count++;
    }
    return count;
  }
console.log(getStringLength("Hello"));

// Compute the summation of all numbers from 1 to n
function computeSummationToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
    
// Compute the factorial of n
function computeFactorialOfN(n) {
        let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// repeat the string n times
function repeatString(string, num) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;
}

// Multiply two numbers together without using *
// TODO: implement with comparator funtion
function multiply(num1, num2) {
    let product = 0;
    if (num2 < 0) {
        for (let i = num2; i < 0; i++) {
            product -= num1;
        }
    } else {
        for (let i = 0; i < num2; i++) {
            product += num1;
        }
    }
    return product;
}

// Multiply all numbers between two numbers 
function multiplyBetween(num1, num2) {
    let product = 1;
    if (num2 <= num1) {
        return 0;
    }
    for (let i = num1; i < num2; i++) {
        product *= i;
    }
    return product;
}
var output = multiplyBetween(2, 5);
console.log("multiplyBetween: " + output); // --> 24

// Write a function called "computeSumBetween".
// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beinning at num1, and excluding num2.
// Notes:
// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.
function computeSumBetween(num1, num2) {
    let sum = 0;
    if (num2 <= num1) {
        return 0;
    }
    for (let i = num1; i < num2; i++) {
        sum += i;
    }
    return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9

// Write a function called "addToFront".
// Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
// Notes:
// It should be the SAME array, not a new array.
function addToFront(array, element) {
    array.unshift(element);
    return array;
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

// Write a function called "joinArrays".
// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

// Write a function called "getElementsAfter".
// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
function getElementsAfter(array, n) {
    return array.slice(n + 1);
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']


// Write a function called "countCharacter".
// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.
function countCharacter(str, char) {
    // let count = 0;
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] === char) {
    //         count++;
    //     }
    // }
    // return count;
    // return input.match(new RegExp(char, "g")).length;
    return (str.match(new RegExp(char, "g")) || []).length;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

// Write a function called "removeFromBack".
// Given an array, "removeFromBack" returns the given array with its last element removed.
// Notes:
// You should be familiar with the method 'pop'.
function removeFromBack(arr) {
    arr.pop();
    return arr;
}
var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

// Write a function called "joinThreeArrays".
// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.
function joinThreeArrays(arr1, arr2, arr3) {
    // return arr1.concat(arr2, arr3);  // works
    // return [...arr1, ...arr2, ...arr3];  // works

    arr1.splice(arr1.length, 0, ...arr2, ...arr3);  // splice returns the removed elements
    return arr1;
}
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

function addToFrontOfNew(arr, element) {
  return [element].concat(arr);
}

// Write a function called "computeAverageOfNumbers".
// Given an array of numbers, "computeAverageOfNumbers" returns their average.
// Notes:
// If given an empty array, it should return 0.
function computeAverageOfNumbers(numbers) {
    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }
    // return sum / numbers.length;
    // if (numbers.length === 0) {
    //     return 0;
    // }
    return numbers.reduce((a, b) => a + b, 0) / numbers.length || 0;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log("computeAverageOfNumbers: " + output); // --> 3
input = [];
console.log("computeAverageOfNumbers: " + computeAverageOfNumbers(input)); // --> 0

/* Write a function called "filterOddLengthWords".
Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.*/
function filterOddLengthWords(words) {
    // return words.filter(word => word.length % 2 === 1);
    return words.filter(word => word.length % 2);
}
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']


/* Write a function called "getLengthOfLongestElement".
Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
Notes:
It should return 0 if the array is empty. */
function getLengthOfLongestElement(arr) {
    // let max = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length > max) {
    //         max = arr[i].length;
    //     }
    // }
    // return max;
    return arr.reduce((max, word) => Math.max(max, word.length), 0);
}
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

/* Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.*/
function squareElements(array) {
    return array.map(num => num * num);
}
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

function filterOddElements(arr) {
    // your code here
    return arr.filter((element) => element % 2 === 1)
}
console.log(filterOddElements([1, 2, 3, 4, 5])); // --> [1, 3, 5]

function computeProductOfAllElements(arr) {
    // your code here
    if (arr.length === 0) return 0;
    return arr.reduce((prev, curr) => prev * curr);
}

function getLengthOfShortestElement(arr) {
    return arr.reduce((prev, curr) => Math.min(prev, curr.length), Infinity);
}
console.log(getLengthOfShortestElement(['one', 'two', 'three'])); // --> 3

/* Write a function called "getLongestElement".
Given an array, "getLongestElement" returns the longest string in the given array.
Notes:
If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string. */
function getLongestElement(arr) {
    return arr.reduce((prev, curr) => (prev.length > curr.length) ? prev : curr)
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'


/* Write a function called "joinArrayOfArrays".
Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays. */
// You should be familiar with the "concat" method for this problem.
function joinArrayOfArrays(arr) {
    return arr.reduce((prev, curr) => prev.concat(curr));
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

/* Write a function called "findShortestWordAmongMixedElements".
Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
Notes:
If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.  */
function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) { return "";}
    return arr.reduce((prev, curr) => {
        console.log(prev, curr);
        if (typeof prev === "string" && typeof curr === "string") {
            return prev.length <= curr.length ? prev : curr;
        } else if (typeof curr === "string") {
            return curr;
        } else {
            return prev;
        }
    });
  }

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log("findShortestWordAmongMixedElements: " + output); // --> 'two'

console.log(typeof "test" === "string"); // --> true

/* Write a function called "findSmallestNumberAmongMixedElements".
Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
Notes:
If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0. */
function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const reduction = arr.reduce((prev, curr) => {
        if (typeof prev === "number" && typeof curr === "number") {
            return prev <= curr ? prev : curr;
        } else if (typeof curr === "number") {
            return curr;
        } else {
            return prev;
        }
    }, Infinity);
    if (reduction === Infinity) {
        return 0;
    } else {
        return reduction;
    }
}
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4


function getLongestWordOfMixedElements(arr) {
    const stringArray = arr.filter(element => typeof element === "string");
    if (stringArray.length === 0) {
        return "";
    }
    return stringArray.reduce((prev, curr) => prev.length >= curr.length ? prev : curr);
}

function getLargestNumberAmongMixedElements(arr) {
    const numberArray = arr.filter(element => typeof element === "number");
    if (numberArray.length === 0) {
        return 0;
    }
    return numberArray.reduce((prev, curr) => prev >= curr ? prev : curr);
}

function getAllWords(str) {
    return str.split(" ").filter(element => element !== '');
}
console.log(getAllLetters("hello")); // --> ['h', 'e', 'l', 'l', 'o']

function convertDoubleSpaceToSingle(str) {
    return str.split("  ").join(" ");
}


// End JS Array Practice
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// High Order Functions
//////////////////////////////////////////////////////////////////////
function takesFunction(func) {
    func();
}

function returnsFunction()
{
    return function(){};
}

// TODO [1, 2, 3, 4].forEach((val) => {console.log(val)});

// Function compares two numbers and returns positive if num1 is greater than num2, negative if num2 is greater than num1, and 0 if they are equal.
function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else {
        return 0;
    }
}

// Write a function called "getAllElementsButNth".
// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
function getAllElementsButNth(array, n) {
    return array.filter((val, index) => index !== n);
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// TODO console.log(output); // --> ['a', 'c']

// Function removes an element from an array.
function removeElement(array, discarder) {
    return array.filter((val, index) => discarder !== array[index]);
}

// TODO console.log(typeof removeElement); // --> function
