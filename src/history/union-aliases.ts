type Combinable = number | string; // type alias (definition type as variable)
type ConversionDescriptor = "as-number" | "as-text"; // literal type

function combine(
  input1: Combinable,
  input2: Combinable, // before this, values is "number | string"
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineName = combine("dani", "edo", "as-text");
console.log(combineName);
