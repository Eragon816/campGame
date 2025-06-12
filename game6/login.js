document.addEventListener("DOMContentLoaded", () => {
  const createTeamNameInput = document.getElementById("create-team-name");
  const createTeamBtn = document.getElementById("create-team-btn");
  const teamCodeDisplay = document.getElementById("team-code-display");

  const joinTeamNameInput = document.getElementById("join-team-name");
  const joinTeamCodeInput = document.getElementById("join-team-code");
  const joinTeamBtn = document.getElementById("join-team-btn");

  // Funktion zum Generieren eines zufälligen 4-stelligen Codes
  function generateTeamCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  // Event Listener für "Team erstellen"
  createTeamBtn.addEventListener("click", () => {
    const teamName = createTeamNameInput.value.trim();
    if (teamName === "") {
      alert("Bitte gib einen Teamnamen ein, um ein Team zu erstellen.");
      return;
    }

    const newCode = generateTeamCode();
    teamCodeDisplay.textContent = `Dein Code: ${newCode}`;
    teamCodeDisplay.style.color = "#f3b61c"; // Goldgelb

    // Füllt die Felder im "Beitreten"-Bereich aus, um es einfacher zu machen
    joinTeamNameInput.value = teamName;
    joinTeamCodeInput.value = newCode;
  });

  // Event Listener für "Spiel starten" (Beitritts-Button)
  joinTeamBtn.addEventListener("click", () => {
    const teamName = joinTeamNameInput.value.trim();
    const teamCode = joinTeamCodeInput.value.trim().toUpperCase();

    if (teamName === "" || teamCode === "") {
      alert("Bitte gib deinen Teamnamen und den Team-Code ein.");
      return;
    }

    // Speichere die Team-Infos im Browser des Spielers
    // Dies ist der "simulierte" Login
    localStorage.setItem("eragon-team-name", teamName);
    localStorage.setItem("eragon-team-code", teamCode);

    // Leite den Spieler zum Hauptmenü weiter
    window.location.href = "menu.html";
  });
});
