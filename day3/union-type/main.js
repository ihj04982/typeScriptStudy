var results = [
    {
        title: "hello",
        releaseDate: "2024",
    },
    {
        name: "hello",
        releaseDate: "2025",
    },
];
function getName(result) {
    // return result.name; // => 타입 좁히기
}
function searchByKeyword(keyword) {
    // number를 string으로 변환
    if (typeof keyword === "number")
        return keyword.toString();
    return keyword;
}
console.log(searchByKeyword(3));
function getDate(day) {
    if (day instanceof Date)
        return day;
    return new Date(day.start);
}
console.log(getDate({ start: "2024-01-01" }));
