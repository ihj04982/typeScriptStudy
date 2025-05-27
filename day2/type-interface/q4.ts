// Product 타입 작성
type TProduct = {
    id: number;
    name: string;
    price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
type TDiscountedProduct = TProduct & { discount: number };

const normalProduct: TProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};

const discountedProduct: TDiscountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};

export {};
