// User 인터페이스 작성
interface IUser {
    id: number;
    name: string;
    email?: string;
}

// Admin 인터페이스 작성 (User 확장)
interface IAdmin extends IUser {
    role: string;
}

const normalUser: IUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

const adminUser: IAdmin = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};

export {};
