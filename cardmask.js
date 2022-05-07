/* 
    Usually when you buy something, your credit card number is masked on the receipt.
    Your task is to write a maskify function which changes all but the last four characters to '#'.

    Example:
    maskify('4556364607935616') => '############5616'
    maskify('64607935616') => '#######5616'
    maskify('1') => '1'
    maskify('') => ''  
*/

// Solution 1:
function oldschoolMaskify(cc) {
    cc = cc.split('');

    for (let i = 0; i < cc.length - 4; i++) {
        cc[i] = '#';
    }

    return cc.join('');
}  

// Solution 2:
const maskify = cc => cc.slice(-4).padStart(cc.length, '#');

console.log(maskify('4524560025985403'));