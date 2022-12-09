/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * 
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !    
 */

const pigify = (str) => str.split(' ').map(word => word.slice(1) + word.charAt(0) + 'ay').join(' ')

console.log(pigify('Pig latin is cool'));