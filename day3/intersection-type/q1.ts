// Product 타입 정의
type TProduct = {
    id: number;
    name: string;
    price: number;
};

// Discount 타입 정의
type TDiscount = {
    discountPercentage: number;
};

function calculateDiscountedPrice(item: TProduct & TDiscount): number {
    return item.price * ((100 - item.discountPercentage) / 100);
}

// 테스트 코드
const discountedProduct: TProduct & TDiscount = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800
