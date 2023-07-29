//Task:1=> Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse()
function reverseString(yourText) {
  let reversedText = "";
  for (let i = yourText.length - 1; i >= 0; i--) {
    reversedText += yourText.charAt(i);
  }
  return reversedText;
}
console.log(reverseString("hello World"));

// Task:2=> Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

function sumOfAllPositiveNUmbers(ary) {
  let sum = 0;
  for (const num of ary) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumOfAllPositiveNUmbers([12, -2, 3, 1]));

/// Task:3=> Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function mostFrequentNum(arr) {
  const frequency = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequency[element] = (frequency[element] || 0) + 1;

    if (frequency[element] > maxFrequency) {
      maxFrequency = frequency[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

console.log(mostFrequentNum([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// Task:4=> Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersWithSum(sortedArray, targetValue);

//Task:5=> Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(number1, number2, operator) {
  const operations = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  if (typeof operations[operator] === "undefined") {
    throw new Error("Invalid operator");
  }

  return operations[operator](number1, number2);
}

console.log(calculator(10, 2, "/"));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}|;:'\",./<>?";
  const password = [];

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password.push(characters[index]);
  }

  return password.join("");
}
console.log(generatePassword(10));

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentValue = romanNumerals[romanNumeral[i]];
    const nextValue = romanNumerals[romanNumeral[i + 1]] || 0;

    if (currentValue < nextValue) {
      value -= currentValue;
    } else {
      value += currentValue;
    }
  }

  return value;
}

console.log(romanToInteger("X"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallest(array) {
  let smallest = array[0];
  let secondSmallest = array[1];

  for (let i = 2; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest;
}
console.log(secondSmallest([1, 3, 6, 78, 4, 2]))