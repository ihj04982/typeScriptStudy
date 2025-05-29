var numberArray = [1, 2, 3];
var stringArray = ["a", "b"];
// 확장형이므로 반드시 length를 가짐
function getValue(data) {
    console.log(data.length);
}
var pair = {
    first: "heejeong",
    second: 25,
    display: function () {
        console.log("".concat(this.first, " \uB294 ").concat(this.second, "\uC0B4"));
    },
};
pair.display();
