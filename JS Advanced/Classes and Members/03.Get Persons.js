function arrayOfPersons() {
    class Person{
        constructor(){
            this.firstName=undefined;
            this.lastName=undefined;
            this.age =undefined;
            this.email=undefined;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let array = [];
    let p1 = new Person();
    p1.firstName='Maria';
    p1.lastName='Petrova';
    p1.age = 22;
    p1.email='mp@yahoo.com';
    let p2 = new Person();
    p2.firstName='SoftUni';
    let p3 = new Person();
    p3.firstName='Stephan';
    p3.lastName='Nikolov';
    p3.age=25;
    let p4 = new Person();
    p4.firstName='Peter';
    p4.lastName='Kolev';
    p4.age=24;
    p4.email='ptr@gmail.com';

    array.push(p1,p2,p3,p4);

    return array;
}
arrayOfPersons();
