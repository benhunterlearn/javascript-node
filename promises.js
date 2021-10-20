// import axios from 'axios';
// const axios =

function callAfterSeconds() {
    var result = setTimeout(
        () => {
            console.log("bananas");
        }, 3000
    );

    // result = axios.get("http://google.com")

    return result;
}

callAfterSeconds();

const doSomething = () => {
    console.log("something");
}


const myPromise = new Promise(
    (resolve, reject) => {
        // async function
        setTimeout(() => {
            resolve("resolved data");
        }, 3000);

    }
)

console.log(myPromise);

myPromise.then(() => {
    console.log('then');
    return 'next then';
}).then((result) => console.log(result));

console.log(myPromise);

myPromise.then((result) => {
    console.log(result);
    throw "THROWN ERROR";
    return 'Grapes';
}).then((grapes) => {
    console.log(grapes);
    throw "THROWN ERROR";
}).catch((error) => {
    console.log(error);
}).finally(() => (console.log('Finally')));

console.log(myPromise);


fetch("https://jservice.io/api/random").then(response=>response.json()).then(json=>console.log(json));


const results = [];
for (let i = 0; i < 5; i++) {
    results.push(fetch("https://jservice.io/api/random"));
}

Promise.all(results).then( (responseArray) => {
    console.log(responseArray);
    responseArray.forEach( (response) => {
            console.log(response);
        }
    )
})

