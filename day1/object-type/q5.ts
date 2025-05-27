// proudcts 타입정의  필요
const product: { name: string; price: number; category?: string }[] = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category: string): string[] {
    // 여기에 구현
    return product.filter((item) => item.category === category).map((item) => item.name);
    // return products.reduce((result: string[], product) => {
    //     if (product.category === category) {
    //         result.push(product.name);
    //     }
    //     return result;
    // }, []);
}
// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
