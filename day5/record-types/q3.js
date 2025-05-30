"use strict";
// 학생 점수 데이터 정의
const scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    // 여기에 구현
    return Object.values(scores).reduce((acc, curr) => acc + curr, 0) / Object.values(scores).length;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
