// 문제 3. API 요청에서 들어오는 데이터의 형식에 따라 처리 로직이 달라집니다. 
// 요청 타입에 따라 처리할 수 있는 데이터의 타입을 결정하세요.
function processRequest(type, data) {
    // 여기에 구현
    return "Processed: ".concat(data);
}
// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
