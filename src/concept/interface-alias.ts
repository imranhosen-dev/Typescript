// type alias vs interface

// interface is generally connected to objects
// type alias is more connected to literals , unions, tuples, primitives

type ID =number

type Role = 'admin' | 'user'

// interface

interface User{
    name:string;
    id:ID;
    role: Role
}

const  user: User = {
    id: 123,
    name: 'imran',
    role: "admin"
}

// interface benefits

interface Animal {
    species: string
}
// extends intersection
interface Cat extends Animal{
    breed:string
}

const cat: Cat = {
    species: 'Felix Catus',
    breed: 'Persian'
}

//type of intersection

type Vehicle = {
    brand: string
}
// "&" symbol is used to perform intersection
type Car = Vehicle & {
    model: string
}

const car: Car = {
    brand: 'Toyota',
    model: 'Corolla'
}

// interface marge by same interface name for example:

interface IEmployee {
    name:string
}
interface IEmployee {
    id:number
}
// this is marge interface value for name,id
const employee:IEmployee = {
    id: 33,
    name: 'abc'
}