// ContactInfo 타입 정의
type TContactInfo = {
    phone: string;
    address: string;
};

// OrderInfo 타입 정의
type TOrderInfo = {
    orderId: number;
    items: string[];
};

function printOrderSummary(order: TContactInfo & TOrderInfo): string {
    return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails: TContactInfo & TOrderInfo = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
