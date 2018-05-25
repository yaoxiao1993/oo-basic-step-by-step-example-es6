import Person from "../../src/practice_7/person.js"
let Class = require('./class');

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
}

module.exports = Student;



