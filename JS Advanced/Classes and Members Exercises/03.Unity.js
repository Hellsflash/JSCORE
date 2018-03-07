class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat) {
        if(rat.hasOwnProperty('name')){
            this.unitedRats.push(rat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        if (this.unitedRats.length === 0){
            return this.name
        }
            return this.name +'\n##'+this.unitedRats.join('\n##');
    }
}


let test = new Rat("Pesho");
console.log(test.toString());
console.log(test.getRats());
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());


console.log(test.toString());
