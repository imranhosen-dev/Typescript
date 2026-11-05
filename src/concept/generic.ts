// generic

const wrapArray = <T>(value: T) => {
    return [value];
};

const stringArr = wrapArray<string>("imran");
const numberArr = wrapArray<number>(3333);

stringArr.map((item) => item.toUpperCase());

interface User {
    name: string;
    role: string;
}
interface Blog {
    title: string;
    description: string;
    date: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}
type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
    data: {
        name: "imran",
        role: "admin",
    },
    statusCode: 200,
    success: true,
};

const blogRes: BlogResponse = {
    data: {
        title: "this is blog",
        description: "typescript is type safety programming language",
        date: new Date().toISOString(),
    },
    statusCode: 200,
    success: true,
};
