document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const enterGameBtn = document.getElementById("enter-game-btn");
  const loginFormContainer = document.getElementById("login-form-container");

  const createTeamNameInput = document.getElementById("create-team-name");
  const createTeamBtn = document.getElementById("create-team-btn");
  const teamCodeDisplay = document.getElementById("team-code-display");
  const joinTeamNameInput = document.getElementById("join-team-name");
  const joinTeamCodeInput = document.getElementById("join-team-code");
  const joinTeamBtn = document.getElementById("join-team-btn");

  // Zeigt das Login-Formular an und startet die Musik über die globale Funktion
  enterGameBtn.addEventListener("click", () => {
    if (window.startMusic) window.startMusic(); // KORRIGIERT: Startet die Musik sofort

    startScreen.style.display = "none";
    loginFormContainer.style.display = "flex";
  });

  function generateTeamCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  createTeamBtn.addEventListener("click", () => {
    const teamName = createTeamNameInput.value.trim();
    if (teamName === "") {
      alert("Bitte gib einen Teamnamen ein, um ein Team zu erstellen.");
      return;
    }
    const newCode = generateTeamCode();
    teamCodeDisplay.textContent = `Dein Code: ${newCode}`;
    teamCodeDisplay.style.color = "#f3b61c";
    joinTeamNameInput.value = teamName;
    joinTeamCodeInput.value = newCode;
  });

  joinTeamBtn.addEventListener("click", () => {
    const teamName = joinTeamNameInput.value.trim();
    const teamCode = joinTeamCodeInput.value.trim().toUpperCase();
    if (teamName === "" || teamCode === "") {
      alert("Bitte gib deinen Teamnamen und den Team-Code ein.");
      return;
    }
    localStorage.setItem("eragon-team-name", teamName);
    localStorage.setItem("eragon-team-code", teamCode);
    localStorage.removeItem("eragon-progress");
    window.location.href = "menu.html";
  });
});
