// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(region: RegionCode, costs: Record<RegionCode, number>): number {
    if (!(region in costs)) {
        throw new Error(`지원되지 않는 지역 코드입니다: ${region}`);
    }
    return costs[region];
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
