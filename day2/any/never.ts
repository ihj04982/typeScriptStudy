// never

// return 할 수 없을 때, 에러만 던질 때때
function infinite(): never {
    while (true) {}
}

function throwError(): never {
    throw new Error("에러");
}

// 유니온 타입은 합집합
type AorB = { a: number; b?: never } | { a?: never; b: number };

let c: AorB = {
    a: 2,
    // b: 5,
};
