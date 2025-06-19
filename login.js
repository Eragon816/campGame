// login.js - Logik für den Gruppen-Beitritt

// NEU: Importiert die gameGroups-Variable aus der groups.js-Datei.
import { gameGroups } from "./groups.js";

document.addEventListener("DOMContentLoaded", () => {
  // Elemente des Startbildschirms
  const startScreen = document.getElementById("start-screen");
  const enterGameBtn = document.getElementById("enter-game-btn");
  const loginFormContainer = document.getElementById("login-form-container");

  // Elemente des neuen Login-Formulars
  const groupSelect = document.getElementById("group-select");
  const groupCodeInput = document.getElementById("group-code-input");
  const joinGroupBtn = document.getElementById("join-group-btn");
  const loginError = document.getElementById("login-error");

  // Zeigt das Login-Formular an und startet die Musik
  enterGameBtn.addEventListener("click", () => {
    if (window.startMusic) window.startMusic();
    startScreen.style.display = "none";
    loginFormContainer.style.display = "flex";
  });

  // Fülle das Dropdown-Menü mit den Gruppen aus groups.js
  if (gameGroups && groupSelect) {
    gameGroups.forEach((group) => {
      const option = document.createElement("option");
      option.value = group.id;
      option.textContent = group.name;
      groupSelect.appendChild(option);
    });
  }

  // Funktion zum Beitreten einer Gruppe
  function joinGroup() {
    const selectedGroupId = groupSelect.value;
    const enteredCode = groupCodeInput.value.trim().toUpperCase();
    loginError.style.display = "none";

    if (!selectedGroupId || !enteredCode) {
      loginError.textContent = "Bitte wähle eine Gruppe und gib den Code ein.";
      loginError.style.display = "block";
      return;
    }

    const selectedGroup = gameGroups.find(
      (g) => g.id.toString() === selectedGroupId
    );

    if (selectedGroup && selectedGroup.code === enteredCode) {
      // Erfolg! Speichere die Gruppendaten im localStorage
      localStorage.setItem("eragon-team-name", selectedGroup.name);
      localStorage.setItem("eragon-group-id", selectedGroup.id);
      localStorage.setItem("eragon-group-code", selectedGroup.code);
      localStorage.setItem("eragon-group-color", selectedGroup.color);

      window.location.href = "menu.html";
    } else {
      // Fehler! Falscher Code oder keine Gruppe gefunden.
      loginError.textContent =
        "Der Gruppen-Code ist falsch. Versuche es erneut.";
      loginError.style.display = "block";
      groupCodeInput.classList.add("shake");
      setTimeout(() => groupCodeInput.classList.remove("shake"), 500);
    }
  }

  joinGroupBtn.addEventListener("click", joinGroup);

  // Erlaube das Beitreten auch mit der Enter-Taste
  groupCodeInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      joinGroupBtn.click();
    }
  });
});
