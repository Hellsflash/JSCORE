function processOdd(array) {
    console.log(array
        .filter((e,i)=>i%2!==0)
        .map(e=>e*2)
        .reverse()
        .join(' '));
}

processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);