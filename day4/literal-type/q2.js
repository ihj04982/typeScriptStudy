function handleRequestState(state) {
    var message = "";
    switch (state) {
        case "loading":
            message = "Loading, please wait...";
            break;
        case "success":
            message = "Request successful!";
            break;
        case "error":
            message = "There was an error processing your request.";
            break;
    }
    return message;
}
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생
