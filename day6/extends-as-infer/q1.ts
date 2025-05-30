// 문제 1. 함수의 반환 타입만 추출하는 유틸리티 타입을 작성하세요.

type ExtractReturnType<F> = F extends  (...args: any[]) => infer R ? R : never; 

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }

