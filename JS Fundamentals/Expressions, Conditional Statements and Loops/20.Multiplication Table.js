function multi(n) {
    let output = '<table border="1">\n';

    output += '  <tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        output += '<th>' + i + '</th>';
    }
    output += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        output += '  <tr>';
        output += '<th>' + i + '</th>';

        for (let j = 1; j <= n; j++) {
            output += '<td>' + (i * j) + '</td>';
        }
        output += '</tr>\n';
    }

    output += '</table>';
    console.log(output);
}

multi(5);