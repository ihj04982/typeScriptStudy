// 함수 작성
function filterSensitiveInfo(user) {
    return { name: user.name, email: user.email, role: user.role };
}
// 테스트 코드
var userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }
