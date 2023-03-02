// Compte à rebours jusque noel 2023
const countdownDate = new Date(2023, 11, 25, 0, 0, 0).getTime();

// Mettre à jour le compte à rebours toutes les secondes
const countdownInterval = setInterval(() => {
  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la différence entre la date actuelle et la date de fin du compte à rebours
  const difference = countdownDate - now;

  // Calculer le nombre de jours, d'heures, de minutes et de secondes restants
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Mettre à jour l'interface graphique avec les valeurs calculées
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds
  // Si le compte à rebours est terminé, afficher un message
  if (difference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<h1>Le compte à rebours est terminé!</h1>";
  }
}, 1000);
