// 매개변수, 리턴타입 정의필요
function processInput(input: number[] | string[] | { message: string }): number | string {
    if (Array.isArray(input)) {
        if (typeof input[0] === "number") {
            return (input as number[]).reduce((acc, curr) => acc + curr, 0);
        } else if (typeof input[0] === "string") {
            return (input as string[]).reduce((acc, curr) => acc + curr, "");
        } else {
            throw new Error("에러");
        }
    } else {
        return input.message.toUpperCase(); // 메시지를 대문자로 변환
    }
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생
