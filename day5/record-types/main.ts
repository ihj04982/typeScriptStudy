// record
// 객체 타입 중 어떤 키와 필드가 올 지 모르는 상황에서 사용
// 동적으로 바뀌기 쉬운 객체에 사용
// 특정 패턴이 반복될 때때

type StringNumberMap = Record<string, number>;

const example: StringNumberMap = {
    apple: 3,
    orage: 2,
    // mango: "delicious",
};

type FruitColor = Record<"apple" | "orange" | "mango", string>;

const fruitColor: FruitColor = {
    apple: "red",
    orange: "orange",
    // banana: "yellow",
    // mango: 2,
    mango: "yellow",
};

type UserRole = "admin" | "user" | "guest";

type RolePermission = {
    admin: string;
    user: string;
    guest: string;
};

type RolePermission2 = Record<UserRole, string>;

export {};
