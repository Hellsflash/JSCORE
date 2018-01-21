function round([number,precision]){
    [number, precision] = [number, precision].map(Number);
    if (precision > 15) {
        precision = 15;
    }

    return Number(number.toFixed(precision));
}

console.log(round([3.1415926535897932384626433832795, 2]));
console.log(round([10.5, 3]));