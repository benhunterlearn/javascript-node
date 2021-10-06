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
