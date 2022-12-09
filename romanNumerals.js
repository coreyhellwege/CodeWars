/**
 * Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
 * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
 * Example: solution(1000); // should return 'M'
 */

const romanNumeralGenerator = (num) => {
    let romanChars = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        str = ''

    for (key in romanChars) {
        while (num >= romanChars[key]) {
            str += key
            num -= romanChars[key]
        }
    }

    return str
}

console.log(romanNumeralGenerator(1990))

/** 
 * The addition assignment (+=) operator adds the value of the right operand to a variable and assigns the result to the variable.
 * The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
 * 
 * The subtraction assignment (-=) operator subtracts the value of the right operand from a variable and assigns the result to the variable.
*/

