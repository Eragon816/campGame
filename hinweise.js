// hinweise.js - mit FIREBASE v9 Integration

// Importiert die benötigten Daten aus data.js
import { allClues } from "./data.js";

import { db } from "./firebase-init.js";
import {
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const cluesListContainer = document.getElementById("clues-list");
  const groupCode = localStorage.getItem("eragon-group-code");

  if (!groupCode) {
    cluesListContainer.innerHTML =
      "<p>Keine Gruppe gefunden. Bitte melde dich zuerst an.</p>";
    return;
  }

  const groupProgressRef = ref(db, "progress/" + groupCode);

  function renderClues(unlockedCluesIds = []) {
    cluesListContainer.innerHTML = "";
    const unlockedClues = allClues.filter((clue) =>
      unlockedCluesIds.includes(clue.id)
    );

    if (unlockedClues.length === 0) {
      cluesListContainer.innerHTML =
        "<p>Noch keine Hinweise gefunden. Löst Aufgaben, um Hinweise freizuschalten!</p>";
      return;
    }

    unlockedClues.sort((a, b) => a.id - b.id);

    unlockedClues.forEach((clue) => {
      const clueCard = document.createElement("div");
      clueCard.className = "clue-card";
      clueCard.innerHTML = `
                <h3 class="clue-type">${clue.type}</h3>
                <p class="clue-text">${clue.text}</p>
            `;
      cluesListContainer.appendChild(clueCard);
    });
  }

  get(groupProgressRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const progress = snapshot.val();
        renderClues(progress.unlockedClues || []);
      } else {
        renderClues([]);
      }
    })
    .catch((error) => {
      console.error(error);
      cluesListContainer.innerHTML = "<p>Fehler beim Laden der Hinweise.</p>";
    });
});
