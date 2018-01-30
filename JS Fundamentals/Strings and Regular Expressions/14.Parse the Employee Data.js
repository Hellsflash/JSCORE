function parse(str) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([\w- ]+)/gm;
    let m =regex.exec(str);
    while (m){
        console.log(`Name: ${m[1]}`);
        console.log(`Position ${m[3]}`);
        console.log(`Salary ${m[2]}`);
        m= regex.exec(str);
    }
}

parse(['Isacc - 1000 - CEO\n'+
'Ivan - 500 - Employee\n' +
'Peter - 500 - Employee\n']);