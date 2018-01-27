function biggest(matrix) {
    console.log(matrix.map(array=>array.sort((a,b)=>a<b)[0])
        .sort((a,b)=>a<b)[0]);
}

biggest([[20, 50, 10], [8, 33, 145]]);
biggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);