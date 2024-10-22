let x: number = 1;
console.log(x);

//giving types to arguments of a function
function greet(name: string) {
  console.log("hello", name);
}
greet("Jwalin");

//assigning a return type to a function
//function whose type is declared must return a value
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sum(4, 4));

function greetme(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greetme("John"); // "Hello, John!"
/*--------------------------------*/

//return true or false
function is18(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(is18(27));

//function that returns another function as input and runs it after 1 second
function delayedCall(functionVariable: () => void) {
  setTimeout(functionVariable, 2000);
}

delayedCall(function () {
  console.log("hello after 2 seconds");
});
