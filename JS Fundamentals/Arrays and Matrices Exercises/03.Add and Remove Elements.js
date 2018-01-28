function addRemove(array) {
    let result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === "add") {
            result.push(i + 1);
        }
        if (array[i] === "remove") {
            if (array.length === 0) {

            } else {
                result.pop();
            }
        }
    }
    if(result.length===0){
        result.push("Empty")
    }
    console.log(result.join('\n'));
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);