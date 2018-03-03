function solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            wight: matrix[i][0], height: matrix[i][1],
            area: function () {
                return this.wight * this.height;
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff || other.wight - this.wight;
            }
        }
    }
    matrix.sort((a, b) => a.compareTo(b));
    return matrix;
}

console.log(solve([[10, 5], [5, 12]]));
console.log(solve([[10, 5], [3, 20], [5, 12]]));