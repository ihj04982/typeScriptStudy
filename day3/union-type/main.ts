// type Track = {
//     title: string;
//     releaseDate: string;
// };

// type Artist = {
//     name: string;
//     releaseDate: string;
// };

// type SearchResult = Track | Artist;

// interface SearchResponse {
//     searchResult: Track | Artist;
// }

// let results: SearchResult[] = [
//     {
//         title: "hello",
//         releaseDate: "2024",
//     },
//     {
//         name: "hello",
//         releaseDate: "2025",
//     },
// ];

// function getName(result: Track | Artist) {
//     // return result.name; // => 타입 좁히기
// }

// 타입 좁히기
// 1. typeof
// 원시타입만 알 수 있음

type TSearchType = number | string;

function searchByKeyword(keyword: TSearchType): string {
    // number를 string으로 변환
    if (typeof keyword === "number") return keyword.toString();
    return keyword;
}

console.log(searchByKeyword(3));

// 2. instancof
// 객체타입 잡음, js에 내장된 객체만 가능

type Period = {
    start: string;
};

type SearchType = Period | Date;

function getDate(day: SearchType): Date {
    if (day instanceof Date) return day;
    return new Date(day.start);
}

console.log(getDate({ start: "2024-01-01" }));

// 3. in
// type Track = {
//     title: string;
//     releaseDate: string;
// };

// type Artist = {
//     name: string;
//     releaseDate: string;
// };

// function getName(result: Track | Artist) {
//     // 필드로 값 확정하기
//     if ("title" in result) return result.title;
//     return result.name; // => 타입 좁히기
// }

// 4. is
// 리턴 값의 타입을 지정함
// function 타입가드(변수: any): 변수 is 특정 타입 {
//     return 조건식
// }

// function isTrack(result: Track | Artist): result is Track {
//     return (result as Track).title !== undefined;
// }

// function printInfo(result: Track | Artist) {
//     if (isTrack(result)) {
//         console.log(result);
//     }
// }

// 유니온타입의 단점 - 합집합 (or 아님)

type Track = {
    type: "track"; // 리터럴 타입: 값 자체를 넣음 - 식별자
    title: string;
    releaseDate: string;
};

type Artist = {
    type: "artist";
    name: string;
    releaseDate: string;
};

type SearchResult = Track | Artist;

function getTypeName(result: SearchResult) {
    if (result.type === "track") return "트랙";
    else if (result.type === "artist") return "아티스트";
    // 유니온 타입이 늘어날 수록 의식적 타입 처리를 해줘야함;;;
    // 타입 처리를 지나칠 때를 대비하여 else처리
    else {
        exhaustiveCheck(result);
        return "결과";
    }
}

function exhaustiveCheck(param: never) {
    throw new Error("에러");
}

const result: Track | Artist = {
    type: "track",
    title: "hey",
    releaseDate: "2025",
    // name: "heejeong",
};

export {};
