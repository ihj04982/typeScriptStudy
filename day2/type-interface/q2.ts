// User 타입을 작성하세요.
type TUser = {
    id: number;
    name: string;
    address: {
        city: string;
        zipCode: number;
    };
};

// User 타입을 사용하여 아래 객체를 작성하세요.
const user: TUser = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};

export {}; 