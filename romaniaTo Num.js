// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
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
  