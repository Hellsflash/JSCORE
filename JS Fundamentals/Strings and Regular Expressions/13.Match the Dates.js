function matchDate(array) {
    let regex=/^[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}/;
    let dates = [];
    for (let tokens of array) {
        tokens=tokens.split(" ");
        for (let str of tokens) {
            if(str.match(regex)){
                dates.push(str);
            }
        }
    }
    for (let args of dates) {
        let date = args.split('-');
        console.log(`${date[0]}-${date[1]}-${date[2].replace('.','')} (Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2].replace('.','')})`)
    }
}

matchDate(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']);
matchDate(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.','I am an awful liar, by the way – Ivo, 28-Sep-2016.']);