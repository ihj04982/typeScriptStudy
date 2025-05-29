// T - generic type
// 호출할 때 타입이 결정됨
// API 호출 / 응답에 자주 사용됨
type ArrayType<T> = T[];

const numberArray: ArrayType<number> = [1, 2, 3];
const stringArray: ArrayType<string> = ["a", "b"];

// type CategoryResponse = {
//     status: string;
//     totalPage: number;
//     totalResult: number;
//     page: number;
//     data: { name: string }[];
// };

// type MovieResponse = {
//     status: string;
//     totalPage: number;
//     totalResult: number;
//     page: number;
//     data: { title: string; genre: string }[];
// };

// 공통 부분 처리 =>
// type ApiResponse<T> = {
//     status: string;
//     totalPage: number;
//     totalResult: number;
//     page: number;
//     data: T[];
// };

// type Category = { name: string };
// type Movie = { title: string; genre: string };

// type CategoryResponse = ApiResponse<Category>;
// type MovieResponse = ApiResponse<Movie>;

// ---
// useState의 타입스크립트화화
// function useState<T>(초기값: T): [T, 함수<T>] {
//     return [값, 함수];
// }

// const [value1, setValue1] = useState<boolean>(false);

interface Length {
    length: number;
}

// 확장형이므로 반드시 length를 가짐
function getValue<T extends Length>(data: T) {
    console.log(data.length);
}

// ---
// 응용
// 1. 조건부 타입

type IsString<T> = T extends string ? "yes" : "no";
type result1 = IsString<string>;

// 2. mapped type

// type Movie = {
//     title: string;
//     genre: string;
//     rate: number;
// };

// // 모든 키를 옵셔널/readonly하게 바꿈
// type Subset<T> = {
//     // k: T 객체의 key
//     [k in keyof T]?: T[k];
//     // readonly [k in keyof T]?: T[k];

// };

// const movie1: Subset<Movie> = { title: "movie", genre: "action" };
// const movie2: Subset<Movie> = { rate: 2 };

interface Pair<T, U> {
    first: T;
    second: U;
    display(): void;
}

const pair: Pair<string, number> = {
    first: "heejeong",
    second: 25,
    display() {
        console.log(`${this.first}는 ${this.second}살`);
    },
};

pair.display();

export {};
