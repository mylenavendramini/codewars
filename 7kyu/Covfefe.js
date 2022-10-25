// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// My solution:

function covfefe(str) {
  const result = str.replace(/coverage/g, "covfefe");
  return result === str ? str + " covfefe" : result;
}

// console.log(covfefe("coverage coverage"));
//   console.log(covfefe("double space "));
// console.log(covfefe("coverage"));
// console.log(covfefe("covfefe"));
