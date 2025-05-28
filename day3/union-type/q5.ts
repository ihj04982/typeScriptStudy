type Square = { type: "square"; side: number };
type Circle = { type: "circle"; radius: number };

type Shape = Square | Circle;

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
    if (shape.type === "square") return Math.pow(shape.side, 2);
    else if (shape.type === "circle") return Math.PI * Math.pow(shape.radius, 2);
    else {
        exhaustiveCheck(shape);
        return 0;
    }
}

function exhaustiveCheck(param: never) {
    throw new Error("에러");
}

// 테스트 코드
console.log(calculateArea({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
