// 작업 상태를 나타내는 enum을 작성하세요.
const enum TaskStatus {
    Pending = "대기 중",
    InProgress = "진행 중",
    Completed = "완료됨",
}

function getStatusMessage(status: TaskStatus): string {
    switch (status) {
        case TaskStatus.Pending:
            return "작업이 대기 중입니다.";
        case TaskStatus.InProgress:
            return "작업이 진행 중입니다.";
        case TaskStatus.Completed:
            return "작업이 완료되었습니다.";
    }
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."

export {};
