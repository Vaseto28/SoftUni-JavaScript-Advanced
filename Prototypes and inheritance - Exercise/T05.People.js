function solution(){
    class Employee{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.salary = 0;
        }

        get salary(){
            return this._salary;
        }

        set salary(value){
            this._salary = value;
        }
    }

    let currentTasks = [];
    Employee.prototype.work = function(){
        if (currentTasks.length === 0){
            for (let element of this.tasks){
                currentTasks.push(element);
            }
        }

        console.log(currentTasks.shift());
    }

    Employee.prototype.collectSalary = function(){
        if (this.dividend === undefined){
            console.log(`${this.name} received ${this.salary} this month.`);
        }
        else{
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);

            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ]
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);

            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ]

            this.dividend = 0;
        }

        get dividend(){
            return this._dividend;
        }

        set dividend(value){
            this._dividend = value;
        }
    }

    return {Employee, Junior, Senior, Manager};
}

const classes = solution();
const junior = new classes.Junior('Ivan',25);

junior.work();
junior.work();

junior.salary = 5811
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();
 
sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55); 

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
