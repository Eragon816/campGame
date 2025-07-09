
// hinweise.js - mit FIREBASE v9 Integration

// Importiert die benötigten Daten aus data.js
import { allClues } from "./data.js";

import { db } from "./firebase-init.js";
// HINZUGEFÜGT: 'onValue' für Echtzeit-Updates. 'get' wird nicht mehr benötigt.
import {
  ref,
  onValue,
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
  
  // *** START DER ÄNDERUNG: 'get' wurde durch 'onValue' ersetzt ***
  // Diese Funktion lauscht nun auf Änderungen und aktualisiert die Ansicht automatisch.
  onValue(groupProgressRef, (snapshot) => {
    if (snapshot.exists()) {
      const progress = snapshot.val();
      // Stelle sicher, dass unlockedClues ein Array ist, auch wenn es in Firebase null ist
      renderClues(progress.unlockedClues || []);
    } else {
      // Wird aufgerufen, wenn für die Gruppe noch kein Fortschritt existiert
      renderClues([]);
    }
  }, (error) => {
    // Fehlerbehandlung für den Fall, dass die Verbindung fehlschlägt
    console.error("Fehler beim Laden der Hinweise:", error);
    cluesListContainer.innerHTML = "<p>Fehler beim Laden der Hinweise.</p>";
  });
  // *** ENDE DER ÄNDERUNG ***
});
