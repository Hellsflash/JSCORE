let breakfastRobot = function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    return function (input) {
        let args = input.split(' ');
        let command = args[0];

        switch (command) {
            case 'restock':
                let element = args[1];
                robot[element] += Number(args[2]);
                return 'Success';
            case 'report':
                return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
            case 'prepare':
                let product = args[1];
                let quantity = Number(args[2]);
                let stats = products[product];

                for (let elem in stats) {
                    if (stats.hasOwnProperty(elem)) {
                        let elemQty = stats[elem];
                        if (robot[elem] < elemQty * quantity) {
                            return `Error: not enough ${elem} in stock`;
                        } else {
                            robot[elem] -= elemQty * quantity;
                        }
                    }
                }
                return 'Success';
        }
    }
};
br =breakfastRobot();
console.log(br("prepare cheverme 1"));
console.log(br("restock protein 10"));
console.log(br("prepare cheverme 1"));
console.log(br("restock carbohydrate 10"));
console.log(br("prepare cheverme 1"));
console.log(br("restock fat 10"));
console.log(br("prepare cheverme 1"));
console.log(br("restock flavour 10"));
console.log(br("prepare cheverme 1"));
console.log(br("report"));