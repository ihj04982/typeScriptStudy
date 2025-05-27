// 인터페이스 작성
interface IUser {
    id: number;
    name: string;
    email?: string;
}

// 타입 작성
type TUser = {
    id: number;
    name: string;
    email?: string;
};

const user: IUser = {
    id: 1,
    name: "Alice",
};

const userWithEmail: TUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};

export {}; 