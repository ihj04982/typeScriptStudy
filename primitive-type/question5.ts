function compareValues(a: unknown, b: unknown): string {
    if (a === b) {
        return "엄격한 동등성";
    } else if (a == b) {
        return "느슨한 동등성";
    } else {
        return "동등하지 않음";
    }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성
