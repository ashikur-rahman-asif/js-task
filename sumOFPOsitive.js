// Task:2=> Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

function sumOfAllPositiveNUmbers(ary) {
    let sum=0
    for (const num of ary) {
        if (num > 0) {
            sum += num
        }
    }
    return sum
}
console.log(sumOfAllPositiveNUmbers([12,-2,3,1]))