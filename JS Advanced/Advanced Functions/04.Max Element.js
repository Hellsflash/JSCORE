function solve(array) {
    return Math.max.apply('', array);
}

console.log(solve([10, 20, 5]));;
console.log(solve([1, 44, 123, 33]));;
