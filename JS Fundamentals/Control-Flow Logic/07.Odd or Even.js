function oddOrEven(number) {
    if(number%2===0){
        return "even";
    }
    if(Math.abs(number%2)===1) {
        return "odd";
    }
    else{
        return "invalid";
    }
}

console.log(oddOrEven(8));