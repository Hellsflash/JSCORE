function findVariable(string) {
    let regex =/\b_[a-zA-Z0-9]+\b/g;
    let variables = string.match(regex);
    let result =[];
    for (let variable of variables) {
        result.push(variable.replace("_",""));
    }
    console.log(result.join(','));
}
findVariable('The _id and _age variables are both integers.');
findVariable('Calculate the _area of the _perfectRectangle object.');
findVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable');