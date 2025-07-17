// login.js - Logik für den Gruppen-Beitritt

import { gameGroups } from "./groups.js";
// NEU: Import der Übersetzungen
import { translations } from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const enterGameBtn = document.getElementById("enter-game-btn");
  const loginFormContainer = document.getElementById("login-form-container");

  const groupSelect = document.getElementById("group-select");
  const groupCodeInput = document.getElementById("group-code-input");
  const joinGroupBtn = document.getElementById("join-group-btn");
  const loginError = document.getElementById("login-error");
  // NEU: Avatar-Select holen
  const avatarSelect = document.getElementById("avatar-select");

  enterGameBtn.addEventListener("click", () => {
    if (window.startMusic) window.startMusic();
    startScreen.style.display = "none";
    loginFormContainer.style.display = "flex";
  });

  if (gameGroups && groupSelect) {
    gameGroups.forEach((group) => {
      const option = document.createElement("option");
      option.value = group.id;
      option.textContent = group.name;
      groupSelect.appendChild(option);
    });
  }

  function joinGroup() {
    // OPTIMIERT: Fehlertexte aus translations.js laden
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];

    const selectedGroupId = groupSelect.value;
    const enteredCode = groupCodeInput.value.trim().toUpperCase();
    const selectedAvatar = avatarSelect ? avatarSelect.value : "";

    loginError.style.display = "none";

    // Prüfe, ob für diese Gruppe schon ein Avatar gespeichert ist
    const groupAvatarKey = "avatar-for-group-" + selectedGroupId;
    let avatarToUse = selectedAvatar;

    const existingAvatar = localStorage.getItem(groupAvatarKey);
    if (existingAvatar) {
      avatarToUse = existingAvatar;
    } else {
      // Speichere das Avatar für die Gruppe (nur beim ersten Mal)
      localStorage.setItem(groupAvatarKey, selectedAvatar);
    }

    if (!selectedGroupId || !enteredCode) {
      loginError.textContent = trans.login_error_empty; // Übersetzt
      loginError.style.display = "block";
      return;
    }

    const selectedGroup = gameGroups.find(
      (g) => g.id.toString() === selectedGroupId
    );

    if (selectedGroup && selectedGroup.code === enteredCode) {
      localStorage.setItem("eragon-team-name", selectedGroup.name);
      localStorage.setItem("eragon-group-id", selectedGroup.id);
      localStorage.setItem("eragon-group-code", selectedGroup.code);
      localStorage.setItem("eragon-group-color", selectedGroup.color);
      localStorage.setItem("eragon-team-avatar", avatarToUse); // Avatar für das Team

      window.location.href = "menu.html";
    } else {
      loginError.textContent = trans.login_error_wrong; // Übersetzt
      loginError.style.display = "block";
      groupCodeInput.classList.add("shake");
      setTimeout(() => groupCodeInput.classList.remove("shake"), 500);
    }
  }

  joinGroupBtn.addEventListener("click", joinGroup);

  groupCodeInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      joinGroupBtn.click();
    }
  });

  // Avatar-Auswahl im Formular deaktivieren, wenn schon gesetzt
  groupSelect.addEventListener("change", () => {
    const selectedGroupId = groupSelect.value;
    const groupAvatarKey = "avatar-for-group-" + selectedGroupId;
    const existingAvatar = localStorage.getItem(groupAvatarKey);
    if (existingAvatar && avatarSelect) {
      avatarSelect.value = existingAvatar;
      avatarSelect.disabled = true;
    } else if (avatarSelect) {
      avatarSelect.disabled = false;
    }
  });
});
