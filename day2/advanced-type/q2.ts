// 작업 상태를 나타내는 enum 작성
const enum TaskStatus {
    Pending = "작업 대기 중",
    InProgress = "작업 진행 중",
    Completed = "작업 완료",
    Failed = "작업 실패",
}

function processTask(status: TaskStatus, input: unknown): string {
    if (typeof input === "string") {
        switch (status) {
            case TaskStatus.Pending:
                return status.toUpperCase();
            case TaskStatus.InProgress:
                return status.toLowerCase();
            case TaskStatus.Completed:
                return `완료:${status}`;
            case TaskStatus.Failed:
                throw new Error("에러: 작업이 실패했습니다.");
        }
    } else throw new Error("에러: 입력값은 문자열이어야 합니다.");
}

// 테스트 코드
console.log(processTask(TaskStatus.Pending, "task1"));
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus.InProgress, "TaskA"));
// 기대 출력: "taska"

console.log(processTask(TaskStatus.Completed, "Report1"));
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus.Failed, "TaskX"));
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus.Pending, 42));
// 에러: 입력값은 문자열이어야 합니다.
