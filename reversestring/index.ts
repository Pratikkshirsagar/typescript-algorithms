// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
function reverse(str: String): String {
  const reverseString = str.split('').reverse().join('');
  return reverseString;
}

reverse('Pratik');

// solution 2
function reverse2(str: String): String {
  let reversed: String = '';

  for (let el of str) {
    reversed = el + reversed;
  }

  console.log(reversed);

  return reversed;
}

reverse2('pratik');
