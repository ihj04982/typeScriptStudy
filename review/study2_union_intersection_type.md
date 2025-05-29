## 유니온 타입 (Union Types)

유니온 타입은 여러 타입 중 하나를 가질 수 있는 타입을 정의할 때 사용합니다.

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber = "hello";  // 문자열 가능
value = 42;  // 숫자도 가능
```

### 타입 좁히기 (Type Narrowing)

유니온 타입을 사용할 때는 타입 좁히기를 통해 정확한 타입을 파악해야 합니다.

1. **typeof 연산자**
   - 원시 타입을 구분할 때 사용
   ```typescript
   function printValue(value: string | number) {
       if (typeof value === "string") {
           console.log(value.toUpperCase());  // 문자열 메서드 사용 가능
       } else {
           console.log(value.toFixed(2));  // 숫자 메서드 사용 가능
       }
   }
   ```

2. **instanceof 연산자**
   - JavaScript 내장 객체 타입을 구분할 때 사용
   ```typescript
   function printDate(date: Date | string) {
       if (date instanceof Date) {
           console.log(date.toLocaleDateString());  // Date 메서드 사용 가능
       } else {
           console.log(new Date(date).toLocaleDateString());
       }
   }
   ```

3. **in 연산자**
   - 객체의 프로퍼티 존재 여부로 타입을 구분
   ```typescript
   type Dog = { name: string; bark(): void };
   type Cat = { name: string; meow(): void };

   function makeSound(pet: Dog | Cat) {
       if ("bark" in pet) {
           pet.bark();  // Dog 타입으로 좁혀짐
       } else {
           pet.meow();  // Cat 타입으로 좁혀짐
       }
   }
   ```

4. **타입 가드 (Type Guard)**
   - 사용자 정의 타입 가드를 통해 타입을 구분
   - `is` 연산자를 사용하여 반환 타입을 명시적으로 지정
   - 타입 가드 함수는 boolean을 반환하며, true일 때 지정된 타입으로 좁혀짐
   ```typescript
   function isDog(pet: Dog | Cat): pet is Dog {
       return "bark" in pet;
   }

   function playWithPet(pet: Dog | Cat) {
       if (isDog(pet)) {
           pet.bark();  // Dog 타입으로 좁혀짐
       } else {
           pet.meow();  // Cat 타입으로 좁혀짐
       }
   }
   ```

### 식별 가능한 유니온 타입 (Discriminated Union Types)

리터럴 타입을 사용하여 유니온 타입의 각 멤버를 구분할 수 있습니다.

```typescript
type Square = {
    kind: "square";  // 식별자
    size: number;
};

type Circle = {
    kind: "circle";  // 식별자
    radius: number;
};

type Shape = Square | Circle;

function getArea(shape: Shape): number {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    } else {
        return Math.PI * shape.radius * shape.radius;
    }
}
```

## 교차 타입 (Intersection Types)

교차 타입은 여러 타입을 하나로 결합하여 모든 속성을 포함하는 새로운 타입을 만듭니다.

```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    id: number;
    department: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
    name: "김철수",
    age: 30,
    id: 1234,
    department: "개발팀"
};
```

### 타입 확장과 교차 타입의 차이

1. **타입 확장 (extends)**
   - 기존 타입을 상속받아 새로운 속성 추가
   - 계층적인 관계 표현에 적합
   ```typescript
   interface Animal {
       name: string;
       age: number;
   }
   
   interface Dog extends Animal {
       breed: string;
   }
   
   const myDog: Dog = {
       name: "멍멍이",
       age: 3,
       breed: "진돗개"
   };
   ```

2. **교차 타입 (&)**
   - 두 타입의 모든 속성을 결합
   - 완전히 새로운 타입 생성
   ```typescript
   type HasName = { name: string };
   type HasAge = { age: number };
   
   type Person = HasName & HasAge;
   
   const person: Person = {
       name: "홍길동",
       age: 25
   };
   ```

### 주의사항

1. **옵셔널 속성의 단점**
   - 타입 안전성이 떨어질 수 있음
   - undefined 체크가 항상 필요
   ```typescript
   type User = {
       name: string;
       age?: number;  // 옵셔널 속성
   };
   
   function printUserAge(user: User) {
       if (user.age !== undefined) {  // 체크 필요
           console.log(user.age);
       }
   }
   ```

2. **교차 타입의 충돌**
   - 동일한 속성에 대해 호환되지 않는 타입이 있으면 never 타입이 됨
   - interface는 교차 타입을 extends할 수 없음
   ```typescript
   type A = { prop: string };
   type B = { prop: number };
   type C = A & B;  // prop: never
   
   // 해결 방법: 공통 타입으로 변경
   type D = { prop: string | number };
   type E = { prop: string | number };
   type F = D & E;  // 정상 동작
   ``` 