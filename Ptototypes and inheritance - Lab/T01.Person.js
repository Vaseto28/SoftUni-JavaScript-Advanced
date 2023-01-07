function createPerson(firstName, lastName){
    let result = {
        firstName,
        lastName
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            if (value.split(' ').length === 2){
                this.firstName = value.split(' ')[0];
                this.lastName = value.split(' ')[1];
            }
        }
    });

    return result;
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson