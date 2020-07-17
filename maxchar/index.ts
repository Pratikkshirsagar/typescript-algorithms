// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxchar(str: String): String {
  let strArray = str.split('');
  let maxChar = '';
  let maxInt = 0;
  let chars: any = {};

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (let el in chars) {
    if (chars[el] > maxInt) {
      maxInt = chars[el];
      maxChar = el;
    }
  }

  return maxChar;
}

maxchar('aaaabbbc');
