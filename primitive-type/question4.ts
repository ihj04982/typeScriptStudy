function stringifyValue(value: string | null | undefined) {
    return value == null || undefined ? "값이 없습니다" : value;
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
