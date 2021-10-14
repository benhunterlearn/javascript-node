// 2021-10-13
// Javascript keyword this

// Arrow functions
// let exampleObj = {
//     name: "Bob",
//     // sayHello: function() {
//     sayHello: () => {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// exampleObj.sayHello();  // uHello, my name is undefined

// // Call and Apply
// let exampleObj2 = {
//     name: "Bob",
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let george = {
//     name: "George"
// }
// exampleObj2.sayHello.call(george);  // Hello, my name is George





// function Lion(name, age) {
//     this.name = name;
//     this.age = age;
//     this.roar = function() {
//         console.log(`${this.name} the lion is roaring`);
//     }
// }

// const boundLion = Lion.bind(pig);
// const boundLionInstance = new boundLion("Fido", 100);
// console.log(boundLion);  // [Function: boundLion]


//// Begin Nik's Code
/* The keyword this
Rules for this (least specific to most specific):
1. Global scope
2. Left of the Dot of the object
3. Arrow functions */
let exampleObjWithArrow = {
  name: "Fred",
  sayHello: () => {
        console.log(this.name + " says hello");
   }

}

exampleObjWithArrow.sayHello();

// 4. Call and Apply */
//
// let exampleObjWithCall = {
//     name: "Fred",
//     sayHello: function(x, y , z) {
//         console.log(this.name + " says hello");
//     }
//
// }
//
// let george = {
//     name: "George"
// }
//
// exampleObjWithCall.sayHello.call(george, 2,3 ,4 );
// exampleObjWithCall.sayHello.apply(george,[ 2,3 ,4] );

/* 5. Bind */
//
// let exampleObjWithBind = {
//     name: "Fred",
//     sayHello: function(x, y , z) {
//         console.log(this.name + " says hello");
//     }
//
// }
//
// let harry = {
//     name: "Harry"
// }
//
// let boundSayHello = exampleObjWithBind.sayHello.bind(harry);
//
// boundSayHello()

/* 6. The new keyword*/
// let exampleObjWithLion = {
//     name: "Fred",
//     sayHello: function(x, y , z) {
//         console.log(this.name + " says hello");
//     }
// }
// let pig = {
//     name: "Paul"
// }
// function Lion(name, age) {
//     // this = {}  => Animal.prototype
//     this.name = name;
//     this.age = age;
//     // return this;
// }
// const boundLion = Lion.bind(pig);
// const boundLionInstance = new boundLion("Fido", 100);
// console.log(boundLionInstance);
// console.log(pig);
// class Lion {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let lion = new Lion("Fido", 100);
//
// exampleObjWithLion.sayHello.call(lion);
//// End Nik's Code