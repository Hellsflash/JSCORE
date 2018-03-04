function printDeckOfCards(array) {
    function makeCard(card, suit) {
        const ValidCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const ValidSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if (ValidCards.indexOf(card) < 0 || !ValidSuits.hasOwnProperty(suit)) {
            throw new Error('Invalid index');
        }

        return {
            card,
            suit,
            toString: function () {
                return card + ValidSuits[suit];
            }
        };

    }
    let deck = [];
    for (let card of array) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substr(card.length - 1, 1);

        try {
            deck.push(makeCard(face, suit));
        } catch(ex){
            return console.log(`Invalid card: ${card}`);
        }
    }

    return console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
