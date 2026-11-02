const addTwo = (a: number, b: number): number => {
    return a + b;
};
console.log(addTwo(20, 40));

const arr: string[] = ["imran", "nazir"];
const numArr: number[] = [3, 4, 8, 9, 2];
//another way type of array
const arrNum: Array<number> = [2, 4, 98, 98];

// triple define number fixed of number

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];
console.log(dhakaLatLong);

// console.log(dhakaLatLong.push('imran')) // not push number / string any data because readonly use. this is wrong code.

//* Optional, Default and rest parameters (...args)

//optional:
const concatName = (firstName: string, lastName?: string) => {
    // this is optional type
    if (!lastName) {
        return firstName;
    }
    return firstName + "" + lastName;
};

console.log(concatName("imran"));