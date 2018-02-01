function capitalize(string) {
    let result ="";
    let args = string.split(' ');

    for (let word of args) {
        result+=word[0].toUpperCase();
        for (let i = 1; i < word.length; i++) {
           result+=word[i].toLowerCase();
        }
        result+=" ";
    }
    console.log(result);
}
capitalize("Capitalize these words");
capitalize("Was that Easy? tRY thIs onE for SiZe!");