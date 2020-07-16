// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1

function palindrome(str: String): Boolean {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

palindrome('abba');

// Solution 2

function palindrome1(str: String): Boolean {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

palindrome1('abba');
