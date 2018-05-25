import Person from "../../src/practice_7/person.js"

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass === undefined){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`;
        }
        
    }

    introduceWith(studentJerry){
        if(studentJerry.klass.number === this.klass.number){
            return `${super.introduce()} I am a Teacher. I teach Jerry.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach Jerry.`
        }
    }
}

module.exports = Teacher;
