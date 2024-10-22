// ARRAYS...
const arr: number[] = [1, 2, 3, 4, 5];

function returnMax(array: number[]) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(returnMax(arr));

//
//Q: Given a list of users, filter out the users that are grown adult 18+
interface ArrayPerson {
  name: string;
  age: number;
}

function isAdult(people: ArrayPerson[]) {
  return people.filter((x) => x.age >= 18);
}

console.log(
  isAdult([
    {
      name: "jwalin",
      age: 20,
    },
    {
      name: "person2",
      age: 18,
    },
    {
      name: "person3",
      age: 15,
    },
  ])
);
