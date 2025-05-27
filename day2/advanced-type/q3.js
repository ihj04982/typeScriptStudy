// 로그 함수 구현
var logMessage = function (message, level) {
    switch (level) {
        case "[INFO]" /* LogStatus.Info */:
            return console.info("".concat(level).concat(message));
        case "[ERROR]" /* LogStatus.Error */:
            return console.error("".concat(level).concat(message));
        case "[DEBUG]" /* LogStatus.Debug */:
            return console.debug("".concat(level).concat(message));
    }
};
// 테스트 코드
logMessage("시스템이 시작되었습니다.", "[INFO]" /* LogStatus.Info */);
logMessage("네트워크 연결 실패!", "[ERROR]" /* LogStatus.Error */);
logMessage("디버깅 모드 활성화", "[DEBUG]" /* LogStatus.Debug */);
