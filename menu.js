document.addEventListener("DOMContentLoaded", () => {
  const teamNameDisplay = document.getElementById("display-team-name");
  const logoutBtn = document.getElementById("logout-btn");

  // Hole den Teamnamen aus dem Speicher des Browsers
  const teamName = localStorage.getItem("eragon-team-name");

  if (teamName) {
    teamNameDisplay.textContent = teamName;
  } else {
    // Wenn kein Team gefunden wird (z.B. direkter URL-Aufruf),
    // schicke den Spieler zurück zur Login-Seite.
    window.location.href = "index.html";
  }

  // Event Listener für den Logout-Button
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Verhindert, dass der Link die Seite neu lädt

    // Lösche die Team-Daten aus dem Speicher
    localStorage.removeItem("eragon-team-name");
    localStorage.removeItem("eragon-team-code");

    // Schicke den Spieler zurück zur Login-Seite
    window.location.href = "index.html";
  });
});
