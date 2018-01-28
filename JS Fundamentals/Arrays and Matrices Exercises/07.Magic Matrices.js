function magicalMatrix(input) {
    let matrix = input.map(row => row.map(Number));
    let magicSum = sumMatrixRow(matrix[0]);
    for (let row = 1; row < matrix.length; row++) {
        let sumRow = sumMatrixRow(matrix[row]);
        if (magicSum !== sumRow) {
            return false;
        }
    }
    let matrixColumnsLength = matrix[0].length;
    let matrixRowsLength = matrix.length;
    for (let col = 0; col < matrixColumnsLength; col++) {
        let sumCol = sumMatrixColumn(matrix, col, matrixRowsLength);
        if (magicSum !==sumCol) {
            return false;
        }
    }

    return true;

    function sumMatrixRow(matrixRow) {
        return matrixRow.reduce((a, b) => a + b);
    }

    function sumMatrixColumn(matrix, col, matrixLength) {
        let sum = 0;
        for (let row = 0; row < matrixLength; row++) {
            sum += matrix[row][col];
        }
        return sum;
    }
}


console.log(magicalMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicalMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicalMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));;