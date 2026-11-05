// top types
// core types
// Nulish type
// unit type
// subtype of unit type
// bottom type

// top type
let x: any = "hello";
x = 222;

// this is unknown type

const something: unknown = "programming is good";
// something.length // this is wrong becuase unknown not sure this value

// core type
let someValue: unknown;
const num: number = 333;

someValue = num; // share value

// Nulish type

interface User {
    name: string;
}
// fix error

type LoginUser = User | null;
const currentUser: LoginUser = null; // null value not asignable

// unit type

const createAccount = () => {
    console.log("account is created.");
};
createAccount(); // unit type default void asignable

// Sub-Type of unit type

// initail return void prefer
const deleteAccount = (): undefined => {
    console.log("delete account");
    return undefined;
};

const account = deleteAccount();
console.log(account);

// another sub type of unit type example

// undefined is void type
const greating = (): undefined => {
    console.log("greating account");
    return undefined;
};
const greatingValue: void = greating();
console.log(greatingValue);

// bottom type

// initial error function return never type
const getError = (msg: string): never => {
    throw new Error(msg);
};

// asign value
const asignValue: string = getError("abcd");
console.log(asignValue)