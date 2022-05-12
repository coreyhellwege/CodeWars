/* 
    Create a function that checks if a number n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

    Solution:
    Use the % modulo operator to compare the numbers. If they are evenly divisible it'll return 0 which is falsey, 
    so wrap the conditions with the ! not operator to flip them to true.
*/

const isDivisible = (n, x, y) => !(n % x) && !(n % y)
console.log(isDivisible(12, 4, 3))