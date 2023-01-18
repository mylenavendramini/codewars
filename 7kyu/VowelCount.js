// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and / or spaces.

// My solution:

function getCount(str) {
  // let count = [];
  // const letters = str.split("").forEach((el) => {
  //   const vowel =
  //     el === "a" || el === "e" || el === "i" || el === "o" || el === "u";
  //   count.push(vowel);
  // });
  // const result = count.filter((el) => el === true);
  // return result.length;

  let count = 0;
  str.split("").forEach((el) => {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      count += 1;
    }
  });
  return count;
}

// console.log(getCount("abre cadabra"));

// Another solution:

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}
