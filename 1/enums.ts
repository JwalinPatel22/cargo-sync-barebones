enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Right);

//changing value of enums
enum Direction2 {
  Up = 1,
  Down, // becomes 2 by default
  Left, // becomes 3
  Right, // becomes 4
}

//values can also be strings
enum Direction3 {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
