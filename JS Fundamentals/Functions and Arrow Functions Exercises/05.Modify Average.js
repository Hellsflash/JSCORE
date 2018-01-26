function modify(num) {
    let numString = num.toString();
    let sum = sumDigits(numString);
    while (sum / numString.length <= 5) {
        numString += '9';
        sum = sumDigits(numString);
    }
    console.log(numString);

    function sumDigits(numString) {
        let sum = 0;
        for (let digit of numString) {
            sum += Number(digit);
        }
        return sum;
    }
}

modify(101);
modify(5835);