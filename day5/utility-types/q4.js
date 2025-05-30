var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    return {
        id: data.id || 0,
        name: data.name || "",
        email: data.email || "",
        role: data.role || "developer",
        isActive: data.isActive === undefined || true,
    };
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    // 여기에 구현
    // 필터의 값을 포함하는 멤버
    return members.filter(function (member) { return member.role === filter.role && member.isActive === filter.isActive; });
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    // 여기에 구현
    return members.map(function (_a) {
        var email = _a.email, rest = __rest(_a, ["email"]);
        return rest;
    });
}
// 테스트 코드
var members = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];
// 1. 새 팀원 생성
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
var activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
