function getStatusMessage(status) {
    switch (status) {
        case "\uB300\uAE30 \uC911" /* TaskStatus.Pending */:
            return "작업이 대기 중입니다.";
        case "\uC9C4\uD589 \uC911" /* TaskStatus.InProgress */:
            return "작업이 진행 중입니다.";
        case "\uC644\uB8CC\uB428" /* TaskStatus.Completed */:
            return "작업이 완료되었습니다.";
    }
}
// 테스트 코드
console.log(getStatusMessage("\uB300\uAE30 \uC911" /* TaskStatus.Pending */)); // "작업이 대기 중입니다."
console.log(getStatusMessage("\uC9C4\uD589 \uC911" /* TaskStatus.InProgress */)); // "작업이 진행 중입니다."
console.log(getStatusMessage("\uC644\uB8CC\uB428" /* TaskStatus.Completed */)); // "작업이 완료되었습니다."
