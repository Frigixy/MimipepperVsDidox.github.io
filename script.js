// Variables pour les scores
let scoreMimipepper = localStorage.getItem('scoreMimipepper') ? parseInt(localStorage.getItem('scoreMimipepper')) : 0;
let scoreDidox = localStorage.getItem('scoreDidox') ? parseInt(localStorage.getItem('scoreDidox')) : 0;

// Fonction pour afficher les scores
function updateScores() {
  document.getElementById('score-mimipepper').textContent = scoreMimipepper;
  document.getElementById('score-didox').textContent = scoreDidox;
}

// Fonction pour ajouter des points lorsqu'on clique sur une équipe
function addPoint(team) {
  if (team === 'mimipepper') {
    scoreMimipepper++;
    localStorage.setItem('scoreMimipepper', scoreMimipepper); // Sauvegarder le score dans le localStorage
  } else if (team === 'didox') {
    scoreDidox++;
    localStorage.setItem('scoreDidox', scoreDidox); // Sauvegarder le score dans le localStorage
  }
  updateScores(); // Mettre à jour l'affichage des scores
}

// Initialisation des scores à l'ouverture du site
updateScores();
