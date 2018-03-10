class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, age: ${this.age})`;
    }
}
function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
extendClass(Person);
let p =new Person('Pesho',22);
console.log(p.toSpeciesString());
