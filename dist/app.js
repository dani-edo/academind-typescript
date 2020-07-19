"use strict";
var userInput;
var userName;
userInput = 10;
userInput = "Helooo";
if (typeof userInput === "string") {
    userName = userInput;
    console.log(userInput, "string");
}
var button = document.querySelector("button");
button.addEventListener("click", handleClick.bind(null, 'Heloo'));
function handleClick(message) {
    console.log("clik cuy! " + message);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
//# sourceMappingURL=app.js.map