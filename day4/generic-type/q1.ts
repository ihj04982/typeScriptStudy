// 매개변수, 리턴타입 정의 필요
function getFirstElement<T>(array: T[]): T | undefined {
    // 여기에 구현
    return array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
