type TeamMember = {
    id: number;
    name: string;
    email: string;
    role: "developer" | "designer" | "manager";
    isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
function createTeamMember(data: Partial<TeamMember>): TeamMember {
    return {
        id: data.id || 0,
        name: data.name || "",
        email: data.email || "",
        role: data.role || "developer",
        isActive: data.isActive === undefined || true,
    };
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members: TeamMember[], filter: Pick<TeamMember, "role" | "isActive">): TeamMember[] {
    return members.filter((member) => member.role === filter.role && member.isActive === filter.isActive);
}

// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members: TeamMember[]): Omit<TeamMember, "email">[] {
    return members.map(({ email, ...rest }) => rest);
}

// 테스트 코드
const members: TeamMember[] = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]

export {};
