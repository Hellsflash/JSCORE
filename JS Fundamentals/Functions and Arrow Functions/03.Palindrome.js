function isPalindrome(input) {
    let reversed = input.split("").reverse().join("");

    if(reversed===input){
        return true;
    }
    return false;
}

console.log(isPalindrome("haha"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("unitinu"));