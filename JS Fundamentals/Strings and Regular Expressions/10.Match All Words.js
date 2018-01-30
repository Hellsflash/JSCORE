function match(string) {
    let regex =/[a-zA-Z0-9_]+/g;

    console.log(string.match(regex).join('|'));
}

match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
match('_(Underscores) are also word characters');