// Example 1

let s = 'Hello World'
//Split and stores the last word
let v = s.split(" ")[1];
console.log("Length of last word:" +v.length);

//Example 2:

let s1 = " fly me to the moon "
let trimWord = s1.trim(); // Trim the word and remove the white spaces
console.log("The trimmed word:" +trimWord)
let S2 = trimWord.split(" ") // Split the trimmed word
console.log("The Splitted word:" +S2)
//let S3 = trimWord.split(" ")[4] // get the lenght of the last word
let S3=S2[S2.length-1]
console.log("The last word:" +S3)
console.log("Length of last word:" +S3.length);

//Example 3: Anagram - If both sorted strings are equal, they are anagrams.

function isAnagram(word1, word2) {
  // 1.converts the letter to lower case
  // 2.Split the letter intpo array
  // 3.Sort will arrange the letters in ascending order
  // 4.Join will convert the array into string
  let s1 = word1.toLowerCase().split("").sort().join("");
  let s2 = word2.toLowerCase().split("").sort().join("");

  // 5. Compare sorted strings
  let result = s1 === s2;

  // 6. Return the result
  return result;
}

// Print the values
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false