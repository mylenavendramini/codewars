// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution:

function count(string) {
  let count = {};
  string.split("").forEach((item) => {
    console.log(count);
    count[item] ? count[item]++ : (count[item] = 1);
  });
  return count;
}

//   console.log(count("aaacidjoajsdo2jasodij"));
