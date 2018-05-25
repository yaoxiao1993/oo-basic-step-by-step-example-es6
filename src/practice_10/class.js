class Class{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`
    }

    assignLeader(student){
        if(student.klass.number === this.number){
            student.judge = true;
            this.leader = student;
        }else{
            this.leader != student;
            console.log('It is not one of us.');
        }
    }

    appendMember(student){
        if(student.klass.number !== this.number){
            student.klass = this;
        }
    }

    isIn(){
        if(this.klass.number){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Class;

