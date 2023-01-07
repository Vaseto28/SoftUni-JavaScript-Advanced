function tiStringExtention(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    Person.prototype.toString = function() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
    
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
    
            this.subject = subject;
        }
    }

    class Studetn extends Person{
        constructor(name, email, course){
            super(name, email);

            this.course = course;
        }
    }

    return {
        Person, 
        Teacher, 
        Studetn
    }
}