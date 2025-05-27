// 객체 타입만 정의 가능 - 반드시 필드가 있어야 함
// 객체 타입은 주로 interface를 사용함
interface IStudent {
    name: string;
    age?: number;
    isStudent?: boolean;
}

let b: IStudent = { name: "Heejeong", age: 25 };

// 객체, 원시타입 등 가능능
type TStudent = {
    name: string;
    age?: number;
};

type Tuple = [number, string, boolean];

// ---
// 확장형
interface IPerson {
    name: string;
    age: number;
}

interface IForeigner extends IPerson {
    nationality: string;
}

type TForeigner = IPerson | { nationality: string; period: Date };

// 유니온 타입은 확장 불가가
// interface INewForeigner extends TForeigner

let american: IForeigner = {
    name: "Jacob",
    age: 34,
    nationality: "American",
};
