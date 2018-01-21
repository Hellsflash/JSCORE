function interest(input) {
    let compundInterest = input[0] * Math.pow(1 + input[1] / (100 * (12 / input[2])), 12 / input[2] * input[3]);
    console.log(compundInterest.toFixed(2));
}
interest([1500, 4.3, 3, 6]);
interest([100000, 5, 12, 25]);