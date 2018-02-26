function solve(array) {
    let closure = (function () {
        let text = '';
        return {
            append:(string)=>text+=string,
            removeStart:(num)=>text =text.substring(num),
            removeEnd :(num)=>text =text.substring(0,text.length-num),
            print: ()=>console.log(text)
        }
    })();
    for (let str of array) {
        let [command, value]=str.split(' ');
        closure[command](value);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);

solve(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);