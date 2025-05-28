// 클래스 정의
class Car {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

class Bike {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
}

function processVehicle(vehicle: Car | Bike): string {
    if (vehicle instanceof Car) return vehicle.brand.toUpperCase();
    if (vehicle instanceof Bike) return `Bike: ${vehicle.type}`;
    else {
        throw new Error("에러가 발생했습니다.");
    }
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown")); // 에러 발생
