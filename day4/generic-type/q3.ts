// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true : false;

// 조건부 타입을 활용한 함수  => ???
// 출력: 입력값이 배열이면 "This is an array."를, 그렇지 않으면 "This is not an array."를 반환합니다.
function checkArrayType<T>(value: T): string {
    // 정답을 봐도 제가 이해하기론, Array.isArray는 조건부 타입 정의와 별개의 메서드로 타입 정의는 사용되지 않은 거 같은데,
    // 어떻게 해야 조건부 타입을 활용해서 함수를 만들 수 있을까요 ㅜㅜ
    return "This is an array.";
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
