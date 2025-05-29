// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    console.log(typeof value);
    return typeof value ? "This is an array." : "This is not an array.";
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
