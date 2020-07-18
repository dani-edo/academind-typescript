function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // return void type
  console.log("Result: " + num);
}

printResult(add(5, 12));

let combineValues: (anu: number, banu: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(5, 6));
