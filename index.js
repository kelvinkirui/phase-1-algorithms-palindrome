function isPalindrome(word) {
  if(word.length ===1) 
  return true;

  let init = 0;
  let last = word.length - 1;

  while(init <= last){
    if(word[init] != word[last]){
      return false;
    }
    init++;
    last--;
  }

    return true
  // Write your algorithm here
  /*
  1. check if the  the word length is 1
  2. Initialize variable init and last and pass init with a value of 1.
  3. Use while to check if init is less or equal to last
  4. If the word init is not equal to word last return false
  5. Increment init and decrement last.When they are equal return true.
  */
}

/* 
check if the word length is equal to 1  then return  true
initialize a variable init with a value of 0
initialize a variable last which 
check if the last letter is same as the first letter in the string:
    - if they are not return false
      -else increment init  and last until all the letters have been checked.
 return true     
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Palindrome is a word which reads the same backwards and forward. 
  I have created a function that take aparameter word.
  I first check if the word length is 1.A one letter word is a palindrome thus i return true.
  I loop through the string if it greater and  i return false if the first element does not math the last element.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
