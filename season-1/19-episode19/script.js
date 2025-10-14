const users = [
  {
    firstName: "Harshit",
    lastName: "Kumar",
    age: 22,
  },
  {
    firstName: "Mohit",
    lastName: "Kumar",
    age: 22,
  },
  {
    firstName: "Nitish",
    lastName: "Kumar",
    age: 22,
  },
  {
    firstName: "Garima",
    lastName: "Kumari",
    age: 20,
  },
]

const fullname = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullname);

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);
