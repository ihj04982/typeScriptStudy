// 문제 2. 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수를 작성하세요.

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    // 동적 키를 사용하는 경우 타입스크립트의 안전성을 보장하기 위해 as 사용
    return obj[key] as T[K];
}

// 테스트 코드
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};

console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
  
  