// javascript의 변수 타입은 any
// any 타입은 단점이 많음 => unknown 사용용

let a: unknown = "heejeong";
a = 3;

// unkown
let b: string = a;

let anyType: any;
let unkownType: unknown;

anyType = "Hello";
unkownType = "Hello";

console.log(anyType.toUpperCase());
// 타입 확정 필요
if (typeof unkownType === "string") {
    console.log(unkownType.toUpperCase());
}
