// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple data type
// } = {
//   name: "dani edo",
//   age: 30,
//   hobbies: ["swimming", "pool"],
//   role: [2, "author"], // tuple data type
// };

// person.role.push("admin");  // allowed but not recomend in tuple
// person.role[1] = 10; // not allowed in tuple

// person.role = [10, 'kamprett'] // allowed in tuple

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: "dani edo",
  age: 30,
  hobbies: ["swimming", "pool"],
  role: Role.ADMIN,
};

let favoriteActivities: (string | number | boolean | object)[];
favoriteActivities = ["sport", 7, false, {}];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("ADMIN lur");
}
