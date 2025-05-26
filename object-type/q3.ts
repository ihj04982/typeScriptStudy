const products1: [string, number, boolean][] = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(products: [string, number, boolean][]): [string, number][] {
    // 여기에 구현
    return products1.map(([name, price]) => [name, price]);
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(products: [string, number, boolean][]): [string, number, boolean][] {
    // 여기에 구현
    return products.filter(([name, price, hasStock]) => [name, price, hasStock]);
}

// 테스트 코드
console.log(getProductNamesAndPrices(products1));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products1));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
