"use strict";
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "dani edo",
    age: 30,
    hobbies: ["swimming", "pool"],
    role: Role.ADMIN,
};
var favoriteActivities;
favoriteActivities = ["sport", 7, false, {}];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("ADMIN lur");
}
//# sourceMappingURL=obs-array-enum.js.map