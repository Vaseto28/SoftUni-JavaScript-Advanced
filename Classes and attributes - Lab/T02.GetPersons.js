function solve(){
    class Person{
        constructor (firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString = () => {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let secondPerson = new Person('SoftUni');
    let thirdPerson = new Person('Stephan', 'Johnson', 25);
    let fourthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [firstPerson, secondPerson, thirdPerson, fourthPerson];
}

console.log(solve());