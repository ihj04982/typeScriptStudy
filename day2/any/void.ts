// void - 리턴 값 없음음

function double(a, b) {
    console.log(a, b);
}

// 함수 타입 지정시 void 사용용
interface NewType {
    name: string;
    age: number;
    double: (a: number, b: number) => void;
    getAge: () => void;
}
