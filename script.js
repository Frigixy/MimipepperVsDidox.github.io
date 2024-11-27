// Référence à la base de données Firebase
const scoreRefMimipepper = firebase.database().ref('scores/mimipepper');
const scoreRefDidox = firebase.database().ref('scores/didox');

// Initialisation des scores
let scoreMimipepper = 0;
let scoreDidox = 0;

// Lire les scores à partir de Firebase
scoreRefMimipepper.on('value', (snapshot) => {
  scoreMimipepper = snapshot.val() || 0;
  document.getElementById('score-mimipepper').textContent = scoreMimipepper;
});

scoreRefDidox.on('value', (snapshot) => {
  scoreDidox = snapshot.val() || 0;
  document.getElementById('score-didox').textContent = scoreDidox;
});

// Fonction pour ajouter des points
function addPoint(team) {
  if (team === 'mimipepper') {
    scoreMimipepper++;
    scoreRefMimipepper.set(scoreMimipepper);
  } else if (team === 'didox') {
    scoreDidox++;
    scoreRefDidox.set(scoreDidox);
  }
}
