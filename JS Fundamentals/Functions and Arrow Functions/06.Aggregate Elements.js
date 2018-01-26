function solution(input) {
    let args = input.map(Number);

    aggregate(args, 0, (a, b) => a + b);
    aggregate(args, 0, (a, b) => a + 1 / b);
    aggregate(args, "", (a, b) => a + b);

    function aggregate(arr, initial, func) {
        let val = initial;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

solution([1, 2, 3]);
solution([2, 4, 8, 16]);