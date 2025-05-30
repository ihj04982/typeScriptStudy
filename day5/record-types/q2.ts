// 학생 점수 데이터 정의
const scores: Record<string, number> = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
  };

  // 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  return total / Object.keys(scores).length;
}
  
  // 테스트 코드
  console.log(calculateAverageScore(scores)); // 85
  
  