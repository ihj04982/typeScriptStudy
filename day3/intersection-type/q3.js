// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        lastLogin: activity.lastLogin,
        actions: activity.actions,
    };
    // return { ...profile, ...activity };
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    return "\uC0AC\uC6A9\uC790 ".concat(user.id, " - ").concat(user.name, " (").concat(user.email, ") - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778: ").concat(user.lastLogin.toISOString());
}
// 테스트 코드
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
