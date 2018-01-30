function bill(array) {
    let product = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            product.push(array[i]);
        }
        else {
            sum += Number(array[i]);
        }
    }
    let products = product.join(', ');

    console.log(`You purchased ${products} for a total sum of ${sum}`)
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
bill(['Cola', '1.35', 'Pancakes', '2.88']);