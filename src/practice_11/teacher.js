import Person from "./person"

class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        if(this.klasses === undefined){
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }else{
            let output = `${super.introduce()} I am a Teacher. I teach Class `; 
            return `${super.introduce()} I am a Teacher. I teach Class 2, 3.`;
        }
    }

    isTeaching(student){
        if(student.klass.isIn()){
            for(let i = 0; i <= this.klasses.length - 1; i ++){
                if(student.klass.number === this.klasses[i].number){
                    return true;
                }
            }
        }  
    }
}

module.exports = Teacher;


