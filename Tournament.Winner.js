//initialize an object with key value pairs denoting
//the team name along with their cumulative scores
//for loop to loop through both arrays and sum the scores as we go
//if team wins and is not present in the obj, add it and add score
// if it is present add score
//return team that has the highest value in the obj

function tournamentWinner(competitions, results) {
  let scoreObj = {};

  for (let i = 0; i <= competitions.length; i++) {
    console.log(scoreObj);
    if (results[i] === 0) {
      if (!(competitions[i][1] in scoreObj)) {
        scoreObj[competitions[i][1]] = 3;
        // console.log(scoreObj[competitions[i][0]]);
      } else {
        scoreObj[competitions[i][1]] += 3;
      }
    } else if (results[i] === 1) {
      if (!(competitions[i][0] in scoreObj)) {
        scoreObj[competitions[i][0]] = 3;
      } else {
        scoreObj[competitions[i][0]] += 3;
      }
    }
  }
//   return scoreObj;

  //Find key that has the highest value in score obj
  let max = 0;
  let maxKey = "";
  for (let key in scoreObj) {
    if (scoreObj[key] > max) {
      max = scoreObj[key];
      maxKey = key;
    }
    }
    
    return maxKey
}

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

tournamentWinner(competitions, results);
