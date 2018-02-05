function countWords(arr) {
    let result ={};

    for (let str of arr) {
        let currWords =str.split(/[^0-9a-zA-Z_]+/g).filter(a=>a!=="");
        for (let word of currWords) {
            if(result.hasOwnProperty(word)){
                result[word]++;
            } else{
                result[word]=1;
            }
        }
    }

    console.log(JSON.stringify(result));
}

countWords(['Far too slow, you\'re far too slow.']);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);