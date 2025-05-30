// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string  {
        if (Array.isArray(value)) {
          return "This is an array.";
        } else {
          return "This is not an array.";
        }
      }

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
