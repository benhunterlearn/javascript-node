
// Create an object
const newDog = {};

// Create properties
newDog.name = 'Buddy';
newDog.age = 3;

// Create functions
newDog.bark = function() {
    console.log('Woof!');
}

// Factory Patterns

// 1. Factory Function
// function DogCreator(name, age) {
//     const newDog = {};
//     newDog.name = name;
//     newDog.age = age;

//     // Creates a new function every time DogCreator is called
//     newDog.bark = function() {
//         console.log('Woof!');
//     }
//     return newDog;
// }

// 2. Functional-shared
function DogCreator(name, age) {
    const newDog = {};
    newDog.name = name;
    newDog.age = age;
    newDog.bark = dogMethods.bark;
    newDog.calculateDogYears = dogMethods.calculateDogYears;
    return newDog;
}

const dogMethods = {
    bark: function() {
        console.log('Woof!');
    },

    calculateDogYears: function() {
        return this.age * 7;
    }
}
// End Functional-shared

// 3. Prototypal
function DogCreator(name, age) {
    const newDog = Object.create(dogMethods);
    newDog.name = name;
    newDog.age = age;
    return newDog;
}

// See what happens
const buddy = DogCreator('Buddy', 3);
const scooby = DogCreator('Scooby', 4);

console.log(buddy);
buddy.bark();

console.log(scooby);
console.log(scooby.calculateDogYears());

// 4. Pseudo-classical
function Dog(name, age) {
    this.name = name;
    this.age = age;
}
// Methods of in the prototype
Dog.prototype.bark = function() {
    console.log('Woof!');
}
Dog.prototype.calculateDogYears = function() {
    return this.age * 7;
}
const oliver = new Dog('Oliver', 7);

// ES-6 Classes
class Dog {
    constructor(name, age) {
        this.name = name;  // properties are not declared, they are instantiated on assignment
        this.age = age;
    }

    bark() {
        console.log('Woof!');
    }

    calculateDogYears() {
        return this.age * 7;
    }
}

// Questions
// 1. How to do type checking of the different methods of creating objects?
// instanceof - checks the object's prototype chain

// Getters and Setters
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(value) {
        this._name = value;
    }
}

// Super and Subclasses
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} eats some food.`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    bark() {
        console.log('Woof!');
    }
}

const zubby = new Dog('Zubby', 3, 'Golden Retriever');
console.log(buddy);
buddy.bark();
