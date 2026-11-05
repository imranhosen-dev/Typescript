// "typeof"

// some caveat of type guard

const printAll = (x: string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    } else if (typeof x === "string") {
        console.log(x);
    } else {
        console.log("");
    }
};
printAll(null);

// Equality

const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
};
compare(33, 33); // this value x , y asignable number

// not Equality

const compareAll = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
compareAll("dddd");

// 'in' operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};

// "instanceof" check

const date = new Date();
const err = new Error("something went wrong");

console.log(date instanceof Error);
console.log(err instanceof Date);

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};

showDate(new Date("12-16-1971"));


// discriminated union

interface Circle {
    kind: 'circle';
    radius: number
}
interface Square {
    kind: 'square';
    sideLength: number
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === 'circle') {
    console.log(shape.radius)
        
    } else {
        console.log(shape.sideLength)
    }
        
}