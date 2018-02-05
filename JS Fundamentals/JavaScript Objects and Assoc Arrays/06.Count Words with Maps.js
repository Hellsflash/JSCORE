function countWordsWithMap(array) {
    let map = new Map();
    for (let str of array) {
        let currWord = str.split(/[^0-9a-zA-Z_]+/).filter(a=>a.trim()!=='');
        for (let word of currWord) {
            word=word.toLowerCase();
            if(map.has(word)){
                map.set(word,(map.get(word)+1));
            } else {
                map.set(word.toLowerCase(),1);
            }
        }
    }
    let arr = Array.from(map.keys()).sort((a,b)=>a.localeCompare(b));
    for (let key of arr) {
        console.log(`'${key.toString()}' -> ${map.get(key)} times`);
    }
}

countWordsWithMap(['Far too slow, you\'re far too slow.']);
countWordsWithMap(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);