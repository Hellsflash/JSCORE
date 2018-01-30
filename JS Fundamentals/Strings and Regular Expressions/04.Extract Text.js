function extract(string) {
    let result = [];
    let start = string.indexOf('(');
    while (start > -1) {
        let end = string.indexOf(')', start);
        if (end === -1) {
            break;
        }
        result.push(string.substring(start + 1, end));
        start = string.indexOf('(', end);
    }
    console.log(result.join(', '));
}

extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');