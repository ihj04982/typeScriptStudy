"use strict";
// record
// 객체 타입 중 어떤 키와 필드가 올 지 모르는 상황에서 사용
// 동적으로 바뀌기 쉬운 객체에 사용
// 특정 패턴이 반복될 때때
Object.defineProperty(exports, "__esModule", { value: true });
const example = {
    apple: 3,
    orage: 2,
    // mango: "delicious",
};
const fruitColor = {
    apple: "red",
    orange: "orange",
    // banana: "yellow",
    // mango: 2,
    mango: "yellow",
};
