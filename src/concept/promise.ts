// promise

interface PostData {
    title: string;
    description: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
    message: string;
}

const fetchUser = async (): Promise<PostData | undefined> => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = (await res.json()) as ApiResponse<PostData>;
        if (!res.ok || !data) {
            throw new Error(`Failed fetch data post ${data.message}`);
        }
        return data.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("someting went wrong");
        }
    }
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.title);
}
