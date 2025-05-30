// 제품 가격 데이터 정의
const prices: Record<string, number> = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(prices: Record<string, number>, product: string, newPrice: number): Record<string, number> {
    return { ...prices, [product]: newPrice };
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
