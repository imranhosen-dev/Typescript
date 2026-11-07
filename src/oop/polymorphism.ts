// polimorphism: different employee respond defferently to the same method call.

class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) {}
    get baseSalary(): number {
        return this._baseSalary;
    }
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number) {
        return this.baseSalary + this.baseSalary * taxRate;
    }
}

class Manager extends Employee {
    override calculatePay(): number {
        return this.baseSalary + 4000;
    }
}
class Developer extends Employee {
    constructor(
        name: string,
        _baseSalary: number,
        public type: string,
    ) {
        super(name, _baseSalary);
    }

    override calculatePay(taxRate: number) {
        return this._baseSalary + 3000 - this.baseSalary * taxRate;
    }
}
const employee = new Employee("Nazir", 2000);
console.log(employee.calculatePay(20));
const manager = new Manager("khan", 40000);
console.log(manager);
const developer = new Developer("imran nazir mim", 500000, "Ai engineer");
console.log(developer.calculatePay(20));
