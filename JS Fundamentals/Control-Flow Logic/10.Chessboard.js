function chess(num) {
    
    let board = '<div class="chessboard">\n';

    for(let i=0; i<num; i++) {
        board += '\t<div>\n';

        for(let j=0; j<num; j++) {
            let color = (i + j) % 2 == 0 ? "black" : "white";
            board += `\t\t<span class="${color}"></span>\n`;
        }

        board += '\t</div>\n';
    }

    board += '</div>';

    return board;
}

console.log(chess(3));