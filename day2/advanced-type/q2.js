function processTask(status, input) {
    if (typeof input === "string") {
        switch (status) {
            case "\uC791\uC5C5 \uB300\uAE30 \uC911" /* TaskStatus.Pending */:
                return status.toUpperCase();
            case "\uC791\uC5C5 \uC9C4\uD589 \uC911" /* TaskStatus.InProgress */:
                return status.toLowerCase();
            case "\uC791\uC5C5 \uC644\uB8CC" /* TaskStatus.Completed */:
                return "\uC644\uB8CC:".concat(status);
            case "\uC791\uC5C5 \uC2E4\uD328" /* TaskStatus.Failed */:
                throw new Error("에러: 작업이 실패했습니다.");
        }
    }
    else
        throw new Error("에러: 입력값은 문자열이어야 합니다.");
}
// 테스트 코드
console.log(processTask("\uC791\uC5C5 \uB300\uAE30 \uC911" /* TaskStatus.Pending */, "task1"));
// 기대 출력: "TASK1"
console.log(processTask("\uC791\uC5C5 \uC9C4\uD589 \uC911" /* TaskStatus.InProgress */, "TaskA"));
// 기대 출력: "taska"
console.log(processTask("\uC791\uC5C5 \uC644\uB8CC" /* TaskStatus.Completed */, "Report1"));
// 기대 출력: "완료: Report1"
// console.log(processTask(TaskStatus.Failed, "TaskX"));
// 에러: 작업이 실패했습니다.
console.log(processTask("\uC791\uC5C5 \uB300\uAE30 \uC911" /* TaskStatus.Pending */, 42));
// 에러: 입력값은 문자열이어야 합니다.
