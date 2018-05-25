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

    isIn(student){
        if(student.klass.number){
            return true;
        }else{
            return false;
        }
    }

    registerAssignLeaderListener(teacher){
        console.log(`I am ${teacher.name}. I know Jerry become Leader of Class ${this.number}.`)
    }

    registerJoinListener(teacher){
        console.log(`I am Tom. I know Jerry has joined Class 2.`);
    }
}

module.exports = Class;