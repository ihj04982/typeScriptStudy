const enum Gender {
    FEMALE = "Female",
    MALE = "Male",
}

const enum SearchType {
    DATE, // 0 - 값이 없을 때 자동으로 넘버링 됨 => 반드시 값 지정할 것것
    KEYWORD, // 1
    ORDER, // 2
}

// 지정되지 않은 값을 넣을 수 없게 함함
let gender: Gender = Gender.FEMALE;
// gender = "alien";

console.log(SearchType.DATE);

//---
//Enum - tree shaking이 안됨 => const Enum, 디버깅이 어려울 수 있음
