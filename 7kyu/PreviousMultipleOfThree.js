// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

// My solution:

const prevMultOfThree = (n) => {
  // is multiple of 3?
  if (n % 3 === 0) {
    return n;
  } else if (n % 3 !== 0) {
    // convert it into a string
    let result = n.toString();
    while (result.length > 1 && result % 3 !== 0) {
      // remove the last digit
      result = result.slice(0, -1);
    }
    if (result % 3 === 0) {
      return +result;
    } else return null;
  }
};
