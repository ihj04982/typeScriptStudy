// 배송비 데이터 정의
var shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
// 배송비 계산 함수 작성
function calculateShippingCost(region, costs) {
    if (!(region in costs)) {
        throw new Error("\uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uC9C0\uC5ED \uCF54\uB4DC\uC785\uB2C8\uB2E4: ".concat(region));
    }
    return costs[region];
}
// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts)); // 에러 발생
