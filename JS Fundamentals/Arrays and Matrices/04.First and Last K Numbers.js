function firstAndLastK(array){
    let num =Number(array.shift());
    console.log(array.slice(0,num).join(' '));
    console.log(array.slice(array.length-num).join(' '));
}

firstAndLastK([2, 7, 8, 9]);
firstAndLastK([3, 6, 7, 8, 9]);