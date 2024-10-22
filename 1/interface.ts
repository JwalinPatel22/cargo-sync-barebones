/*
INTERFACE :
~Defines a contract that a class or object must follow >> outlines the key structure
what properties and methods the class or object must have
~Interface => used for assigning types to objects
*/

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const user = {
  firstName: "jwalin",
  lastName: "patel",
  email: "something@somemail.com",
  age: 20,
};

function isLegal(person: User): boolean {
  if (person.age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(user));

//implementing interfaces
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void; //greet function with phrase parameter without any returntype
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string = "hellow") {
    console.log(`${phrase} ${this.name}`);
  }
}

const newEmployee = new Employee("Meow-Man", 20);
newEmployee.greet();
