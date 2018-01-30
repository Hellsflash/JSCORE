function solve(text) {
    text=text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match,a,b)=> Number(a)*Number(b));

    console.log(text);
}

solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');