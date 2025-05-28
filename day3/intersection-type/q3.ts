// 기본 사용자 정보 타입 정의
type TProfile = {
    id: number;
    name: string;
    email: string;
};

// 사용자 활동 기록 타입 정의
type TActivity = {
    lastLogin: Date;
    actions: string[];
};

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: TProfile, activity: TActivity): TProfile & TActivity {
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
function getUserSummary(user: TProfile & TActivity): string {
    return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile: TProfile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity: TActivity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
