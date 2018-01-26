function radar(array) {
    let speed = array[0];
    let zone = array[1];
    let limit =0;
    switch (zone) {

        case 'residential':
             limit = 20;
            return getInfraction(speed, limit);
        case 'city':
             limit = 50;
            return getInfraction(speed, limit);
        case 'interstate':
             limit = 90;
            return getInfraction(speed, limit);
        case 'motorway':
             limit = 130;
            return getInfraction(speed, limit);
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed <= 0) {
            return console.log("");
        } else {
            if (overSpeed > 0 && overSpeed <= 20) {
                return console.log("speeding");
            } else if (overSpeed > 20 && overSpeed <= 40) {
                return console.log("excessive speeding");
            } else {
                return console.log("reckless driving");
        }
        }
    }
}

radar([40, 'city']);
radar([21, 'residential']);
radar([120, 'interstate']);
radar([200, 'motorway']);