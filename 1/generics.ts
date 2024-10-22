/* 
Generics enable you to create components that work with any datatype while still providing compile-time safety
*/

function identify<T>(arg: T): T {
  return arg;
}

let output1 = identify<string>("hello");
let output2 = identify<number>(4);

//
//example: creating a function that returns the first element of an array of any datatype
function returnFirst<T>(arr: T[]) {
  return arr[0];
}
