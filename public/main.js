let teamOneScore = 0
let teamTwoScore = 0


if (teamOneScore < 0) {
  console.log('range was hit')
} else (teamOneScore < 0)(!isNaN(teamOneScore))
{


//reset scores team1//
const resetScoreTeamOne = () => {
  teamOneScore = 0
  document.querySelector('.team1Score').textContent = teamOneScore
}

//reset scores team2//
const resetScoreTeamTwo = () => {
  teamTwoScore = 0
  document.querySelector('.team2Score').textContent = teamTwoScore
}

//add button team1//
//set range to not go < 0//
const addScoreTeamOne = () => {
  teamOneScore += 1
  document.querySelector('.team1Score').textContent = teamOneScore
}

//add button team2//
const addScoreTeamTwo = () => {
  teamTwoScore += 1
  document.querySelector('.team2Score').textContent = teamTwoScore
}

//subtract button team1//
const subtractScoreTeamOne = () => {
  if (teamOneScore < 0) {
  teamOneScore += -1
  document.querySelector('.team1Score').textContent = teamOneScore
}
}

//subtract button team2//
const subtractScoreTeamTwo = () => {
  if (teamOneScore < 0) {
  teamTwoScore += -1
  document.querySelector('.team2Score').textContent = teamTwoScore
}
}

//update team1 name//
const updateOne = () => {
  const team1 = document.querySelector('.updated-text').value
  document.querySelector('.team1 > h2').textContent = team1
}

//update team2 name//
const updateTwo = () => {
  const team2 = document.querySelector('.updated-text').value
  document.querySelector('.team2 > h2').textContent = team2
}

const main = () => {
  document
    .querySelector('.team-1-add-1-button')
    .addEventListener('click', addScoreTeamOne)
  document
    .querySelector('.team-2-add-1-button')
    .addEventListener('click', addScoreTeamTwo)
  document
    .querySelector('.team-1-subtract-1-button')
    .addEventListener('click', subtractScoreTeamOne)
  document
    .querySelector('.team-2-subtract-1-button')
    .addEventListener('click', subtractScoreTeamTwo)
  document
    .querySelector('.update-team-1-name')
    .addEventListener('click', updateOne)
  document
    .querySelector('.update-team-2-name')
    .addEventListener('click', updateTwo)
  document.querySelector('.reset1').addEventListener('click', resetScoreTeamOne)
  document.querySelector('.reset2').addEventListener('click', resetScoreTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)
//enable click event to "add1" button on both teams
