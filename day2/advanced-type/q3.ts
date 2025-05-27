// 로그 수준을 나타내는 enum 작성
const enum logLevel {
    Info = "[INFO]",
    Error = "[ERROR]",
    Debug = "[DEBUG]",
}

// 로그 함수 타입을 정의하세요.
type LogMessage = (message: string, level: logLevel) => void;

// 로그 함수 구현
const logMessage: LogMessage = (message, level) => {
    switch (level) {
        case logLevel.Info:
            console.info(`${level} ${message}`);
            break;
        case logLevel.Error:
            console.error(`${level} ${message}`);
            break;
        case logLevel.Debug:
            console.debug(`${level} ${message}`);
            break;
    }
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", logLevel.Info);
logMessage("네트워크 연결 실패!", logLevel.Error);
logMessage("디버깅 모드 활성화", logLevel.Debug);
