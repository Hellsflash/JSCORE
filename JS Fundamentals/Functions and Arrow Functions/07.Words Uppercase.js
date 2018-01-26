function upper(input) {
    let strUpper = input.toUpperCase();
    let words = extractWords();
    words = words.filter(w=>w != "");
    return words.join(", ");
    function extractWords() {
        return strUpper.split(/\W+/);
    }
}

console.log(upper('Hi, how are you?'));
console.log(upper('hello'))