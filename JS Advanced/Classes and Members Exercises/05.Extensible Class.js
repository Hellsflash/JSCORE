let Extensible = (function () {
    let uniqueId = 0;

    return class Extensible {
        constructor() {
            this.id = uniqueId++;
        }

        extend(otherObj) {
            for (let prop in otherObj) {
                if (otherObj.hasOwnProperty(prop)) {
                    if (typeof otherObj[prop] === 'function') {
                        Extensible.prototype[prop] = otherObj[prop];
                    } else {
                        this[prop] = otherObj[prop];
                    }
                }
            }

        }
    };
}());

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
