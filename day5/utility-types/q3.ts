type User = {
    name: string;
    email: string;
    password: string;
    role: string;
};

type FilteredUser = Omit<User, "password">;

// 함수 작성
function filterSensitiveInfo(user: User): FilteredUser {
    const { password, ...filteredInfo } = user;
    return filteredInfo;
}

// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }
