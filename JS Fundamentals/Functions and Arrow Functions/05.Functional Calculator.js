function calculate(firstNum,secondNum,operator) {
    switch (operator){
        case "+":
            return firstNum+secondNum;
        case "-":
            return firstNum-secondNum;
        case "*":
            return firstNum*secondNum;
        case "/":
            return firstNum/secondNum;
    }
}

console.log(calculate(2, 4, '+'));
console.log(calculate(3, 3, '/'));
console.log(calculate(18, -1, '*'));