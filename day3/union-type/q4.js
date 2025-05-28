// function printInfo(result: Track | Artist) {
//     if (isTrack(result)) {
//         console.log(result);
//     }
// }
// 사용자 정의 타입 가드
function isRectangle(shape) {
    return shape.width !== undefined;
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)
