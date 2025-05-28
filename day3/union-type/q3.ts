type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
    if ("permissions" in user) return user.permissions.join(",");
    if ("email" in user) return user.email;
    else {
        throw new Error("에러가 발생했습니다.");
    }
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// console.log(processUser({ type: "guest" })); // 에러 발생
