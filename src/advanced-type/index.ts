// basic union

type Status = 'pending';
const status: Status = 'pending'


type Identify = string | number
const id: Identify = 333
console.log(id)

//* Literal union

type Role = 'user' | 'admin' | 'manager'

const userRole: Role = 'manager'
console.log(userRole)

//* Object Union

type Admin = {
    id: number,
    role: 'admin',
    privileges: string[],
}

type Member = {
    id: number,
    role: 'member',
    plans: string[],
}

type User = Admin | Member;

const user: User = {
    id: 1233,
    role: "admin",
    privileges: ['imran', 'nazir', 'mim']
}

console.log(user)