/*
    Given an array of integers, return an array where the first element is the count of all positive numbers 
    and the second element is the sum of all negative numbers. 0 is neither positive nor negative.
    Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

const positivesAndNegatives = (arr) => { 
    const positiveCount = arr.filter(num => num > 0).length,
          sumOfNegatives = arr.filter(num => num < 0).reduce((a, b) => a + b, 0)

    return [positiveCount, sumOfNegatives]
}

console.log(positivesAndNegatives(nums))