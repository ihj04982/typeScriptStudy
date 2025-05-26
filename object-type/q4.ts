//매개변수, 리턴 타입 정의 필요
function updateUser(user: { name: string; age?: number }): { name: string; age: number } {
    // 나이가 제공되지 않으면 18로 설정
    return { ...user, age: user.age ?? 18 };
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
