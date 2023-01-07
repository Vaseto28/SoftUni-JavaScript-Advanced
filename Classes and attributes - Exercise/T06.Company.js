class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee = (name, salary, position, department) => {
        if (name === '' || name === null || name === undefined){
            throw new Error("Invalid input!");
        }

        if (salary === '' || salary === null || salary === undefined || Number(salary) < 0){
            throw new Error("Invalid input!");
        }

        if (position === '' || position === null || position === undefined){
            throw new Error("Invalid input!");
        }

        if (department === '' || department === null || department === undefined){
            throw new Error("Invalid input!");
        }

        if (this.departments[department] === undefined){
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment = () => {
        let biggestAverageSalary = {
            departmentName: undefined,
            department: {},
            sal: Number.MIN_SAFE_INTEGER
        };

        for (let currDepartment in this.departments){
            let currSumSalariesArr = this.departments[currDepartment].map(x => x.salary);

            let totalSalaries = 0;
            for (let salary of currSumSalariesArr){
                totalSalaries += salary;
            }

            totalSalaries /= currSumSalariesArr.length;

            if (totalSalaries > biggestAverageSalary.sal){
                biggestAverageSalary.sal = totalSalaries
                biggestAverageSalary.department = this.departments[currDepartment];
                biggestAverageSalary.departmentName = currDepartment;
            }
        }

        let bestDep = biggestAverageSalary.department.sort((a, b) => { return b.salary - a.salary || a.name.localeCompare(b.name)});

        let depInfo = '';
        for (let currEmployee of bestDep){
            depInfo += `${currEmployee.name} ${currEmployee.salary} ${currEmployee.position}\n`;
        }

        return `Best Department is: ${biggestAverageSalary.departmentName}\nAverage salary: ${biggestAverageSalary.sal.toFixed(2)}\n${depInfo.trimEnd()}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());