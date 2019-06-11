// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

// *********************************************************

countSheep = num => [...Array(num).keys()].map(x=>`${x+1} sheep...`).join``

console.log(countSheep(3));