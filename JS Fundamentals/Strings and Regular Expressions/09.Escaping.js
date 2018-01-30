function escape(array) {
    console.log('<ul>');
    for (let str of array) {
        str=str.replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/&/g,'&amp;')
            .replace(/'/g,'&#39');

        console.log(`  <li>${str}</li>`)
    }
    console.log('</ul>');

}

escape(['<b>unescaped text</b>', 'normal text']);
escape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);