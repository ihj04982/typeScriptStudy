// 학생 점수 데이터 정의
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// 평균 점수 계산 함수 작성
function calculateAverageScore(scores) {
    var total = Object.values(scores).reduce(function (sum, score) { return sum + score; }, 0);
    return total / Object.keys(scores).length;
}
// 테스트 코드
console.log(calculateAverageScore(scores)); // 85
