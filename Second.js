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
  console.log(secondSmallest([1,3,6,78,4,2])); 
  