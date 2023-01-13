// #Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.
function addingShifted(arrayOfArrays, shift) {
  let result = [];
  let start = 0;
  for (let array of arrayOfArrays) {
    for (let i = 0; i < array.length; i += 1) {
      result[start + i] = (result[start + i] || 0) + array[i];
    }
    start += shift;
  }
  return result;
}

console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, 7, 7, -7],
    ],
    0
  )
);
