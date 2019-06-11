// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// *********************************************************

function points(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(':');
    return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
  }, 0);
}

// *********************************************************

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

const result = points(["3:1", "2:2", "0:1"])

console.log(result);