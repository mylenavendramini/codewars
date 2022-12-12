// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solution:
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// function removeExclamationMarks(s) {
//   return (arr = s
//     .split("")
//     .map((item) => (item === "!" ? "" : item))
//     .join(""));
// }

console.log(removeExclamationMarks("Hello World!"));
