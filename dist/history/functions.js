"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // return void type
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(5, 6));
addAndHandle(10, 11, function (result) {
    console.log("callback: ", result);
});
//# sourceMappingURL=functions.js.map