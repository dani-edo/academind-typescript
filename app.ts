let userInput: unknown;
let userName: string;

userInput = 10;
userInput = "Helooo";

if (typeof userInput === "string") {
  userName = userInput;
  console.log(userInput, "string");
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
