// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
let numbers: readonly number[] = [];

// 아래 코드는 오류가 발생해야 합니다.
numbers.push(4);
numbers[0] = 42;
