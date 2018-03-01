function sortArray(input, method) {
    let ascending = ((a, b) => a - b);
    let descending = ((a, b) => b - a);

    let sortingStrat = {
        'asc': ascending,
        'desc': descending
    };

    return input.sort(sortingStrat[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));