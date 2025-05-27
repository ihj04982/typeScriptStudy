// BaseUser 인터페이스 작성
interface IBaseUser {
    id: number;
    name: string;
}

// AdminUser 타입 작성
type TAdminUser = IBaseUser & {
    role: string,
};

// GuestUser 타입 작성
type TGuestUser = IBaseUser & {
    visitCount: number;
};

// 아래 객체를 작성하세요.
const admin: TAdminUser = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};

const guest: TGuestUser = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
