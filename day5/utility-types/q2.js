// 함수 작성
function getProfileSummary(user) {
    return { id: user.id, name: user.email };
}
// 테스트 코드
var userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }
