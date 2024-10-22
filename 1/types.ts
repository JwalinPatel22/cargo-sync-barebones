/* 
TYPES:
~Very similar to interfaces, Types lets you aggregate data together.
*/

type User1 = {
  firstName: string;
  lastName: string;
  age: number;
};
//Thing that types allow us to do...

/*-----1-UNION-----*/
//eg. you want to print the ID of a user. The ID can be either string of number
type StringOrNumber = string | number; //union of string and number

function printId(id: StringOrNumber) {
  console.log(`ID is ${id}`);
}
printId(100);
printId("123abcd");

/*-----2-INTERSECTION-----*/
type Employee1 = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee1 & Manager;

const teamLeadPerson: TeamLead = {
  name: "Meow-man",
  startDate: new Date(),
  department: "Software destroyer",
};

console.log(teamLeadPerson);
