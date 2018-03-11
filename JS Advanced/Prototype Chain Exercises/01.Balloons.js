function solution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon  extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let balloons = solution();
let Balloon = balloons.Balloon;
let PartyBalloon = balloons.PartyBalloon;
let BirthdayBalloon = balloons.BirthdayBalloon;

let b = new Balloon('red', 0.2);
let pb = new PartyBalloon('blue', 0.3, 'black', 2);
let bb = new BirthdayBalloon('yellow', 0.5, 'pink', 5, 'Happy B Day');
