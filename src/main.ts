import "./concept/basic.js";
import "./concept/union.js";
import "./concept/different-type.js";

class Mobile {
    name: string;
    color: string;
    price: number;
    constructor(name: string, color: string, price: number) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    getMobile() {
        return `${this.name},${this.color},${this.price}`;
    }
}
const newMobile = new Mobile("Chuwi", "Gray", 25000);
const buyingMobile = newMobile.getMobile();
console.log(buyingMobile);
