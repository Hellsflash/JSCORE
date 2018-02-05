function cityMarket(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let splitted = arr[i].split(/\s\-\>\s|\s\:\s/);
        let town = splitted[0];
        let product = splitted[1];
        let amountOfSales = Number(splitted[2]);
        let priceForOneUnit = Number(splitted[3]);
        let totalIncome = amountOfSales * priceForOneUnit;

        if (map.has(town)) {
            if (map.get(town).has(product)) {
                map.get(town).set(product, map.get(product) + totalIncome);
            }
            else {
                map.get(town).set(product, totalIncome);
            }
        }
        else {
            let products = new Map();
            products.set(product, totalIncome);
            map.set(town, products);
        }
    }
    for (let [key, value] of map) {
        console.log(`Town - ${key}`);
        for (let [product, income] of map.get(key)) {
            console.log(`$$$${product} : ${income}`)
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);