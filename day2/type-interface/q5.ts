// Product 타입 작성
type TProduct = {
    id: number;
    name: string;
    price: number;
};

// Order 타입 작성
type TOrder = {
    orderId: number;
    products: TProduct[];
    totalPrice: number;
};

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: TOrder = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};

export {};
