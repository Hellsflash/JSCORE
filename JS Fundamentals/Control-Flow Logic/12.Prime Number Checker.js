function isPrime(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
    let prime = num !== 1;
    if(num<=0){
        return false;
    }
    else{
    for(let i=2; i<sqrtnum+1; i++) {
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
    }
}

console.log(isPrime(8));