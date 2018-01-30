function reverseAndConcat(array) {
    let result = '';
    let sting ='';
    array.forEach(str=>sting+=str);
   let reversed= sting.split("").reverse();
    for (let str of reversed) {
        result+=str;
    }

    console.log(result);
}

reverseAndConcat(['I', 'am', 'student']);
reverseAndConcat(['race', 'car']);

