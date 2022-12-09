/**
 * Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
 * When documents (especially old ones written with a typewriter) are digitised, character recognition softwares often make mistakes.
 * 
 * Your task is to correct the errors in the digitised text. You only have to handle the following mistakes:
 * S is misinterpreted as 5
 * O is misinterpreted as 0
 * I is misinterpreted as 1
 * 
 * E.g '51NGAP0RE' => 'SINGAPORE'
 * 
 * The test cases contain numbers only by mistake.
 */

const characters = { 5: 'S', 0: 'O', 1: 'I' }
const correct = (str) => str.split('').map(char => characters[char] ? char.replace(char, characters[char]) : char).join('')

console.log(correct('51NGAP0RE'))