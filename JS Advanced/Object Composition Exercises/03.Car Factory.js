function solve(req) {
    let car = Object.create(req);
    car.model = req.model;
    if (req.power <= 90) {
        car.engine = {power: 90, volume: 1800};
    } else if (req.power <= 120) {
        car.engine = {power: 120, volume: 2400};
    } else {
        car.engine = {power: 200, volume: 3500};
    }
    if (req.carriage === 'hatchback') {
        car.carriage = {type: 'hatchback', color: req.color};
    } else {
        car.carriage = {type: 'coupe', color: req.color};
    }
    let wheel = req.wheelsize;
    if(wheel%2===0){
        wheel-=1;
    }

    car.wheels =[wheel,wheel,wheel,wheel];

    return car;
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));