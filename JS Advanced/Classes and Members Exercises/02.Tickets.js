function sortTickets(array, status) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let args of array) {
        let info = args.split('|');
        let dest = info[0];
        let price = Number(info[1]);
        let stat = info[2];
        let ticket = new Ticket(dest, price, stat);
        result.push(ticket);
    }
    switch (status) {
        case'destination':
            result = result.sort(function (a, b) {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case'price':
            result = result.sort(function (a, b) {
                return a.price > b.price;
            });
            break;
        case'status':
            result = result.sort(function (a, b) {
                return a.status.localeCompare(b.status);
            });
            break;
    }
    return result;
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));