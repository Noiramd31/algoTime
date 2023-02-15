// Given the string, check if it is a palindrome.

function palindrome(inputString) {
    const arr = inputString.split('');
    let result = true;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        result = false;
        break;
      }
    }
    return result;
  }
  console.log(palindrome("aabaa")); // true
  console.log(palindrome("abac")); // false
  console.log(palindrome("a")); // true

