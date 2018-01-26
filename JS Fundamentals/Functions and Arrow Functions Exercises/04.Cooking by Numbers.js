function solution(array) {
    let num = array[0];
    let operations = array.slice(1, array.length);

    return cook(num, operations);

    function cook(num, operations) {
        for (let op of operations) {
            if (op === 'chop') {
                num /= 2;
            } else if (op === 'dice') {
                num = Math.sqrt(num);
            } else if (op === 'spice') {
                num += 1;
            } else if (op === 'bake') {
                num *= 3;
            } else {
                let precent = num * 0.20;
                num -= precent;
            }
            console.log(num);
        }
    }
}

solution([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solution([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);