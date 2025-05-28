// 클래스 정의
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    // 여기에 구현
    if (vehicle instanceof Car)
        return vehicle.brand.toUpperCase();
    if (vehicle instanceof Bike)
        return "Bike: ".concat(vehicle.type);
    else {
        throw new Error("에러가 발생했습니다.");
    }
}
// 테스트 코드
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown")); // 에러 발생
