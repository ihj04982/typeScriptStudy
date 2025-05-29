function createObject<T>(key: string, value: T): { [key]: T } {
    return { [key]: value };
}

// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
