// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// My solution:

function getSumOfDigits(integer) {
  const arr = String(integer).split("");
  let sum = 0;
  if (integer === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => +acc + +curr);
}

console.log(getSumOfDigits(0));
