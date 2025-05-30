// 상관관계가 있는 정보에 사용
// 파생된 데이터, 업데이트가 필요한 관계일 때 사용

// 1. Omit
// 타입에서 특정 필드를 제거

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type PublicUser = Omit<User, "password" | "id">;

let userProfile: PublicUser = {
    // id: 1,
    name: "1",
    email: "1",
    // password: "1",
};

//2. Pick
//특정 정보만 가져옴

type BasicUser = Pick<User, "id" | "email">;

let basicUser: BasicUser = {
    id: 1,
    // name: "1",
    email: "1",
    // password: "1",
};

// 3.Partial
// "?"

interface Address {
    street: string;
    city: string;
    country: string;
}

const updateAddress = (address: Partial<Address>) => {
    console.log(address);
};

updateAddress({ street: "123" });

export {};
