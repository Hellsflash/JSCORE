function prices([title, day]) {
    let t = title.toLowerCase();
    let d = day.toLowerCase();

    if (t === "the godfather") {
        switch (d) {
            case "monday":
                return 12;
            case "tuesday":
                return 10;
            case "wednesday":
                return 15;
            case "thursday":
                return 12.50;
            case "friday" :
                return 15;
            case "saturday":
                return 25;
            case "sunday" :
                return 30;
            default:
                return "error";
        }
    } else if (t === "schindler's list") {
        switch (d) {
            case "monday":
                return 8.50;
            case "tuesday":
                return 8.50;
            case "wednesday":
                return 8.50;
            case "thursday":
                return 8.50;
            case "friday" :
                return 8.50;
            case "saturday":
                return 15;
            case "sunday" :
                return 15;
            default:
                return "error";
        }
    } else if (t === "casablanca") {
        switch (d) {
            case "monday":
                return 8;
            case "tuesday":
                return 8;
            case "wednesday":
                return 8;
            case "thursday":
                return 8;
            case "friday" :
                return 8;
            case "saturday":
                return 10;
            case "sunday" :
                return 10;
            default:
                return "error";
        }
    } else if (t === "the wizard of oz") {
        switch (d) {
            case "monday":
                return 10;
            case "tuesday":
                return 10;
            case "wednesday":
                return 10;
            case "thursday":
                return 10;
            case "friday" :
                return 10;
            case "saturday":
                return 15;
            case "sunday" :
                return 15;
            default:
                return "error";
        }
    }else{
        return "error";
    }
}

console.log(prices(["The Godfather", "Friday"]));
console.log(prices(["casablanca", "sunday"]));
console.log(prices(["Schindler's LIST", "monday"]));
console.log(prices(["SoftUni", "Nineday"]));