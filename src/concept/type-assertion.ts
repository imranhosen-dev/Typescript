// type assertion
// 'as' syntex
// type assertion avoid for good dicision

type Status = "pending" | "approved" | "rejected";
const someStatus: string = "pending";
const showStatus = (status: Status) => {
    console.log("your current status is", status);
};

showStatus(someStatus as Status);

// not-null assertion

interface Config {
    port?: number
}
const config: Config = {
    port: 5000
}
const currentPort: number = config.port!;
// const currentPort: number = config.port as number; 


// constant assertion

// this const assertion not asignable and just readonly value declare
const configuration = {
    port: 5000,
    prefix: '/api/v1'
} as const; 
