function solution(array) {
    let step = Number(array.pop());

    let result =[];
    for (let i = 0; i < array.length; i+=step) {
       result.push(array[i]);
    }
    console.log(result.join('\n'));
}

solution(['5', '20', '31', '4', '20', '2']);
solution(['dsa','asd', 'test','tset', '2']);
solution(['1', '2', '3', '4', '5', '6']);