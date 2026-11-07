// Abstraction: every employee must be define how their pay is calculated.

abstract class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) {}
    get baseSalary(): number {
        return this._baseSalary;
    }
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot found. please try again.");
        }
        this._baseSalary = newSalary;
    }
    abstract paymentPay(): number;
    abstract getResourse(): string[];
    abstract registerEntryTime(): string;
}

class Manager extends Employee {
    override paymentPay(): number {
        return this.baseSalary + 5000;
    }
    override getResourse(): string[] {
        return ["imran", "mmmm", "khan"];
    }
    override registerEntryTime(): string {
        return this.name;
    }
}
class Developer extends Employee {
    override paymentPay(): number {
        return this.baseSalary + 6000;
    }
    override getResourse(): string[] {
        return ["imran", "mmmm", "khan"];
    }
    override registerEntryTime(): string {
        return this.name;
    }
}

