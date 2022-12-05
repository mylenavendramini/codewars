// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
//   [17, 17, 3, 17, 17, 17, 17] ==> 3

// My first solution:
function stray(numbers) {
  let n = 0;
  numbers
    .sort((a, b) => a - b)
    .map((_, _2, x) => {
      if (x[0] === x[1]) {
        n = x[x.length - 1];
        console.log(n);
      } else {
        n = x[0];
      }
    });
  return n;
}

// console.log(stray([1, 1, 2]));

// Another solution:

function stray(numbers) {
  for (const i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}
