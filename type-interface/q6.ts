// BaseUser 인터페이스 작성
interface IBaseUser {
    id: number;
    name: string;
}

// AdminUser 타입 작성
type TAdminUser = IBaseUser & {
    id: number;
    name: string;
};
// GuestUser 타입 작성
// 여기에 작성

// 아래 객체를 작성하세요.
const admin: AdminUser = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};

const guest: GuestUser = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
