//Task:1=> Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() 
function reverseString(yourText) {
    let reversedText = '';
    for (let i = yourText.length - 1; i >= 0; i--) {
        reversedText += yourText.charAt(i);
    }
    return reversedText;
  }
  console.log(reverseString('hello World'))
 
  
  