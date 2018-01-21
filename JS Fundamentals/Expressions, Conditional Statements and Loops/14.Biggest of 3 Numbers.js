function biggest([n1, n2, n3]) {
    let first = Number(n1);
    let second = Number(n2);
    let third = Number(n3);

    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }
}

console.log(biggest([5, -2, 7]));
console.log(biggest([130, 5, 99]));
console.log(biggest([43, 43.2, 43.1]));
console.log(biggest([5, 5, 5]));
console.log(biggest([-10, -20, -30]));