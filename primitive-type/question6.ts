function isPrimitive(value: unknown): boolean {
    // value가 객체가 아닌지(*원시값인지)를 반환
    return value !== Object(value); // Object(value): 원시값을 객체로 래핑, 이미 객체라면 그대로 반환
    //
    // null !== Object(null) 과 typeof null !== "object" 랑 뭐가 다르지?
    // typeof null !== object가 false이다 왜?
    // typeof null이 object인데 javascript의 초기 구현 상의 버그라고 함.
    // 반면에 Object(null)은 새로운 객체로 반환하기 때문에 true임.
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
