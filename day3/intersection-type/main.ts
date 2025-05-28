type TProduct = {
    id: string;
    name: string;
    price: number;
    discount?: number;
};

type TDiscountProduct = TProduct & { discountRatio: number };

interface IProduct {
    id: string;
    name: string;
    price: number;
}

// 타입확장: 한 타입을 기반으로 다른 타입을 정의하는 방식
// 기존의 타입을 상속받아 새로운 속성이나 기능을 **추가**함
// **계층적인 관계** 표현에 적합

interface IDiscountProudct extends IProduct {
    discountRatio?: number;
}

// ---
// 교차타입: 두 타입을 합성하여 모든 속성을 하나로 결합
// 두 타입의 속성을 모두 포함하는 **새로운 타입**을 만듦

type TPopularity = {
    rate: number;
};

interface IReview {
    rate: string;
}

type Filter = TPopularity & IReview;

// let filter: Filter = {
//     rate: 2.3, // 타입이 never가 됨
// };

// interface IFilter extends TPopularity, IReview {} // interface 생성 불가

// ---
// 옵셔널 속성의 단점
// 옵셔널의 경우 타입 안전성이 떨어짐
// 옵셔널 속성이 undefined 일 수 있어서 항상 체크 필요

export {};
