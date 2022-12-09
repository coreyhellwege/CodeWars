/**
 * Given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 */

const alphabetPosition = (text) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split(''),
          matchingChars = text.toLowerCase().split('').filter(char => alphabet.indexOf(char) >= 0) 
    return matchingChars.map(char => alphabet.indexOf(char) + 1).join(' ')
}

/**
 * Solution:
 * 
 * Step 1: Split text into an array of characters and return only characters that exist in the alphabet array 
 * i.e they are an index in the alphabet array that is 0 or greater. 
 * 
 * Note: The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * Step 2: Return the index of each matching character in the alphabet array, and add 1 because the instructions specify a to start at 1 not 0.
 * Then use join to turn it back into a string, separated by a space (as per the specified output).
 * 
 * Note: The join() method creates and returns a new string by concatenating all of the elements in an array.
 */

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // -> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
