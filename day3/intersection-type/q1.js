function calculateDiscountedPrice(item) {
    return item.price * ((100 - item.discountPercentage) / 100);
}
// 테스트 코드
var discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct)); // 800
