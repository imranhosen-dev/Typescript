// Access Modifier
// private,protected,public,readonly

// class and object

class Employee {
    name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    get salary(): number {
        return this.baseSalary;
    }
    set salary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("salary not found");
        }
        this.baseSalary = newSalary;
    }
    describe(): string {
        return `${this.name} earns ${this.baseSalary}`;
    }
}

const employee = new Employee("imran", 300000);
const employee2 = new Employee("khan", 5000000);

console.log(employee2.salary);


