function aggregate(array) {
    let concat = array.reduce((a, b) => a + b);
    let numArray = array.map(Number);
    let sum = numArray.reduce((a, b) => a + b);
    let min = numArray.reduce((a, b) => Math.min(a, b));
    let max = numArray.reduce((a, b) => Math.max(a, b));
    let product = numArray.reduce((a, b) => a * b);

    console.log('Sum = ' + sum);
    console.log('Min = ' + min);
    console.log('Max = ' + max);
    console.log('Product = ' + product);
    console.log('Join = ' + concat);

}

aggregate(['2', '3', '10', '5']);
aggregate(['5', '-3', '20', '0.5']);