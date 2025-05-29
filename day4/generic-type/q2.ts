// 매개변수, 리턴타입 정의 필요
function isNumberArray<T>(array: T[]) {
    // 여기에 구현
    return array.length === 0 || typeof array[0] === "number" ? true : false;
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
