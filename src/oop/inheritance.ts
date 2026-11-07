

// inheritance

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

// inheritance

class Manager extends Employee {
    teamMemberCount: number;
    constructor(teamMemberCount: number, name: string, baseSalary: number) {
        super(name, baseSalary);
        this.teamMemberCount = teamMemberCount;
        this.name = name;
    }
}

const manager = new Manager(2500, "imran", 200);
console.log(manager);
console.log(manager.describe());
