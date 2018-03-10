function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let base = super.toString().slice(0, -1);
            return base + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let base = super.toString().slice(0, -1);
            return base + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}//

let obj = toStringExtension();
let Person = obj.Person;
let Teacher = obj.Teacher;
let Student = obj.Student;

let p = new Person('Pesho','p@p.com');
let t = new Teacher('Gosho','g@g.com','JS');
let s = new Student('Mario','m@m.com','C#');

//console.log(p.toString());
//console.log(t.toString());
//console.log(s.toString());


