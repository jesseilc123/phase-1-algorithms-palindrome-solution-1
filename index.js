function reverse(word){
  // 'abc' => 'cba'
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}

/* 
  In your own words
Make a function that returns true if a word is a palindorme and false if not.
that means if the word is the same as the word in reverse, I should return true.
/* 
/* 
  Add your pseudocode here
that means if the word is the same as the word in reverse, I should return true.

reverse the input string

if the input is the same as the reversed input
  return true
else 
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
