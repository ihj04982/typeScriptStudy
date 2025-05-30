// 1. 식별자 사용하기

interface Track {
    // type: 'track'
    title: string;
    releaseDate: string;
}

interface Artist {
    // type: 'artist'
    name: string;
    debutYear: number;
}

// const result: Track | Artist = {
//     title: 'Hello',
//     releaseDate: '2015-05-15',
//     name: 'Adele',
//     debutYear: 2008
// }

// 2. 제네릭 타입 사용하기기
type SearchItem<T extends "track" | "artist"> = T extends "track" ? Track : Artist;

const result: SearchItem<"track"> = {
    title: "Hello",
    releaseDate: "2015-05-15",
    // name: 'Adele', // 오류 발생
};

// 3. infer 키워드 사용하기
// 타입 추론
// 잘 사용하지는 않음

// T는 반드시 함수 타입이어야 함
// 매개변수는 상관 없음
// 리턴 값이 있다면 리턴 값을 반환
// 리턴 값이 없다면 never 반환
type ReturnTypeOfFunction<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

function getUserInfo() {
    return { name: "John", age: 30 };
}

// typeof를 사용하는 이유
// 제네릭 타입의 T는 타입만 들어갈 수 있음
// 함수의 타입을 가져오려면 typeof 연산자를 사용해야 함
type userInfo = ReturnTypeOfFunction<typeof getUserInfo>;

// 또는 프로미스의 리턴 타입을 추론할 때 사용

// 프로미스의 리턴 타입을 추론할 때 사용
// U는 프로미스의 리턴 타입
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<string>;

type Result = UnwrapPromise<PromiseString>;

// 복잡한 객체에도 사용 가능
// 객체의 요소 타입을 추론할 때 사용
type ElementType<T> = T extends (infer U)[] ? U : T;

type ArrayOfNumbers = Artist[];
type SingleArtist = ElementType<ArrayOfNumbers>;

// 4. as 연산자 사용하기
// + is는 타입을 확정
// is와 유사한 역할

let someValue: unknown = "Hello";
// console.log(someValue.length) // 오류 발생

let newValue = someValue as string;
console.log(newValue.length); // 오류 발생 안함

// DOM 요소 조작시에도 사용 됨

const inputElement = document.querySelector("input"); // null | element
// inputElement.value  = 'Hello' // 오류 발생

let newValue2 = inputElement as HTMLInputElement;
newValue2.value = "Hello"; // 오류 발생 안함

// 강제 타입 추론은 최대한 피하는 것이 좋음

// let value = 'Hello';
// let numberValue = value as number; // 강제 형변환
// let result2 = numberValue + 1 
