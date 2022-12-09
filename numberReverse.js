/**
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * 
 * Example (Input => Output):
 * 35231 => [1,3,2,5,3]
 * 0 => [0]
 */

const digitize = (num) => {
    return num.toString().split('').reverse().map(Number)
    // return num.toString().split('').reverse().map(n => Number(n))
}

console.log(digitize(823947592046))

