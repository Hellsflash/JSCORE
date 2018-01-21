function equation(a, b, c) {
    [a, b, c] = [a, b, c].map(Number);

    let d = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(d)) / (2 * a);

    if (d > 0 && x1 < x2) {
        console.log(x1 + "\n" + x2);

    } else if (d > 0 && x1 > x2) {
        console.log(x2 + "\n" + x1);
    } else if (d === 0) {
        console.log(x1);
    } else {
        console.log("No");
    }
}

equation(6,11,-34);
equation(1,-12,36);
equation(5,2,1);