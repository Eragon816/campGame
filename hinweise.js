import { allClues } from "./data.js";
import { translations } from "./translations.js";
import { db } from "./firebase-init.js";
import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const cluesListContainer = document.getElementById("clues-list");
  const clueCardTemplate = document.getElementById("clue-card-template");
  const loader = document.getElementById("loader");
  const groupCode = localStorage.getItem("eragon-group-code");

  // NEU: Lokaler Cache für freigeschaltete Hinweise
  let cachedUnlockedCluesIds = [];

  if (!groupCode) {
    cluesListContainer.innerHTML =
      "<p>Keine Gruppe gefunden. Bitte melde dich zuerst an.</p>";
    loader.style.display = "none";
    cluesListContainer.dataset.loading = "false";
    return;
  }

  const groupProgressRef = ref(db, "progress/" + groupCode);

  const showLoader = (show) => {
    loader.style.display = show ? "block" : "none";
    cluesListContainer.dataset.loading = show;
  };

  function renderClues() {
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];
    cluesListContainer.innerHTML = "";

    const unlockedCluesData = allClues
      .filter((clue) => cachedUnlockedCluesIds.includes(clue.id))
      .map((clue) => ({
        id: clue.id,
        ...trans.clues[clue.id - 1],
      }));

    if (unlockedCluesData.length === 0) {
      cluesListContainer.innerHTML = `<p>${trans.no_clues_found}</p>`;
      return;
    }

    unlockedCluesData.sort((a, b) => a.id - b.id);

    unlockedCluesData.forEach((clue) => {
      // NEU: Template nutzen
      const cardClone = clueCardTemplate.content.cloneNode(true);
      cardClone.querySelector(".clue-type").textContent = clue.type;
      cardClone.querySelector(".clue-text").textContent = clue.text;
      cluesListContainer.appendChild(cardClone);
    });
  }

  // Der Haupt-Listener, der mit Firebase synchronisiert
  onValue(
    groupProgressRef,
    (snapshot) => {
      const progress = snapshot.val();
      cachedUnlockedCluesIds = progress?.unlockedClues || [];
      renderClues(); // Mit neuen Daten rendern
      showLoader(false); // Lade-Spinner ausblenden
    },
    (error) => {
      console.error("Fehler beim Laden der Hinweise:", error);
      cluesListContainer.innerHTML = "<p>Fehler beim Laden der Hinweise.</p>";
      showLoader(false);
    }
  );

  // NEU: Auf Sprachwechsel lauschen und aus dem Cache neu rendern
  window.addEventListener("languageChanged", () => {
    // Kein erneuter Firebase-Call nötig, wir haben die Daten ja schon!
    renderClues();
  });

  // Initialer Ladezustand
  showLoader(true);
});
