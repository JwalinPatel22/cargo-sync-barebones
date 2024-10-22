/*  create a swap function that can two arguments of the same type 
    arguments can either be two strings, numbers of booleans (both of same type)
    the function should swap them and return an array with the elements swapped
*/

function swap<T>(a: T, b: T) {
  let temp = a;
  a = b;
  b = temp;
  const ans = [a, b];
  return ans;
}

console.log(swap<number>(1, 56));
console.log(swap<string>("hello", "meow"));
console.log(swap<boolean>(true, false));
