type User = {
    name: string;
    email: string;
    password: string;
};

// 함수 작성
function updateUserForm(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

// 테스트 코드
const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

export {};
