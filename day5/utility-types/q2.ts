type UserProfile = {
    id: number;
    name: string;
    email: string;
    address: string;
};

type PublicUserProfile = Pick<UserProfile, "id" | "name">;

// 함수 작성
function getProfileSummary(user: UserProfile): PublicUserProfile {
    return { id: user.id, name: user.name };
}

// 테스트 코드
const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

export {};
