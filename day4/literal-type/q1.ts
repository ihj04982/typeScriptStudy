type TButton = "primary" | "secondary" | "danger";

function getButtonClass(style: TButton): string {
    return `btn-${style}`;
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생
