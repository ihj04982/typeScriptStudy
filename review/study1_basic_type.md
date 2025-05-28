## 원시 타입

TypeScript에서 지원하는 원시 타입

-   **string**: 문자열 타입

```typescript
let name: string = "김철수";
```

-   **number**: 숫자 타입 (정수, 실수 구분 없음)

```typescript
let age: number = 25;
let height: number = 175.5;
```

-   **boolean**: 불리언 타입

```typescript
let isActive: boolean = true;
```

-   **null**: null 값

```typescript
let data: null = null;
```

-   **undefined**: 정의되지 않은 값

```typescript
let value: undefined = undefined;
```

-   **symbol**: 고유한 식별자 (ES6+)
-   **bigint**: 큰 정수 (ES2020+)

### + 원시 타입 체크

두 코드가 다른 결과를 출력함함

```typescript
// 방법 1: Object() 메서드 사용
function isPrimitive1(value: unknown): boolean {
    return value !== Object(value);
}

// 방법 2: typeof만 사용
function isPrimitive2(value: unknown): boolean {
    return typeof value !== "object";
}

console.log(isPrimitive1(null)); // true (정확함)
console.log(isPrimitive2(null)); // false (버그!)
```

`typeof null === "object"`는 JavaScript 버그.
JavaScript 초기 구현에서 null을 숫자 0으로 표현했는데, 0의 타입 태그가 "객체"였기 때문.

`Object()` 메서드를 사용하면 원시값을 객체로 래핑하고, 이미 객체라면 그대로 반환하므로 더 정확한 원시값 체크가 가능

## 객체, 배열, 튜플

### 객체

```typescript
let person: {
    name: string;
    age?: number; // 선택적 속성
    isActive: boolean;
} = {
    name: "김철수",
    isActive: true,
};

// 재할당 가능
person = {
    name: "이영희",
    age: 30,
    isActive: false,
};
```

### 배열과 튜플

```typescript
// 배열
let scores: number[] = [90, 85, 88];
let names: string[] = ["김철수", "이영희", "박민수"];

// 튜플 - 순서가 중요한 고정된 길이의 배열
type PersonInfo = [string, number, boolean]; // [이름, 나이, 활성상태]
```

## Type, Interface

### Interface

객체 타입 정의에 주로 사용하며, 확장 가능

```typescript
interface Person {
    name: string;
    age: number;
}

// 확장 예시
interface Student extends Person {
    studentId: string;
    grade: number;
}

let student: Student = {
    name: "김철수",
    age: 20,
    studentId: "2024001",
    grade: 3,
};
```

### Type

객체, 원시 타입 등 다양한 타입 정의가 가능하며, 타입 자체를 유니온으로 조합 가능

```typescript
type PersonType = {
    name: string;
    age: number;
};

// 타입 자체를 유니온으로 조합
type Employee = Person | { employeeId: string; department: string };

// 원시 타입 유니온
type Status = "active" | "inactive" | "pending";
```

### 확장 시 주의사항

-   Interface는 extends로 확장 가능
-   유니온 타입은 재확장 불가

```typescript
// Interface 확장 - 가능
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    studentId: string;
}

// Type 유니온 - 재확장 불가능
type Employee = Person | { employeeId: string; department: string };

// 이런 식으로 유니온 타입을 extends 할 수 없음
// interface Manager extends Employee { } // ❌ 에러
```

## 고급 타입

### Unknown vs Any

```typescript
// any 타입은 타입 체크를 우회하므로 위험
let anyValue: any = "Hello";
console.log(anyValue.toUpperCase()); // 가능

// unknown 타입은 타입 체크 필요
let unknownValue: unknown = "Hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // 타입 가드 필요
}
```

-   `any`: 타입 체크를 우회하므로 사용을 피하는 것이 좋음
-   `unknown`: 타입 안전성을 위해 타입 가드와 함께 사용

### Never

절대 발생하지 않을 값의 타입. 함수가 항상 예외를 발생시키거나 무한 루프에 빠질 때 사용

```typescript
// 항상 에러를 던지는 함수
function throwError(): never {
    throw new Error("에러");
}

// 무한 루프
function infinite(): never {
    while (true) {}
}

// 배타적 유니온 - name 또는 id 중 하나만 가능
type PersonIdentifier = { name: string; id?: never } | { name?: never; id: number };
```

### Void

함수의 반환값이 없음을 나타냄

```typescript
interface Calculator {
    add: (a: number, b: number) => void;
    print: () => void;
}
```

### Enum

열거형(Enum)은 관련된 상수들의 집합. `const enum`은 컴파일 시점에 인라인으로 대체되며, 타입 안전성과 가독성을 높여줌.
(다만 디버깅이 어려워짐)

```typescript
const enum UserStatus {
    Active = "활성",
    Inactive = "비활성",
    Pending = "대기중",
    Blocked = "차단됨",
}

let status: UserStatus = UserStatus.Active;
console.log(status); // "활성"
```
