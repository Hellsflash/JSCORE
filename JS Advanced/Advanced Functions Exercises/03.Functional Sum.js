function solve(num) {

    let add = function (n) {
        return solve(num+n);
    };
    add.toString =function () {
        return num;
    };

    return add;
}


console.log(solve(1)(6)(-3).toString());
