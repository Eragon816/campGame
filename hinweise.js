document.addEventListener("DOMContentLoaded", () => {
  // Die Daten (allClues) werden jetzt aus data.js geladen.

  const cluesListContainer = document.getElementById("clues-list");

  const progress = JSON.parse(localStorage.getItem("eragon-progress")) || {
    unlockedClues: [],
  };
  const unlockedCluesIds = progress.unlockedClues;

  function renderClues() {
    cluesListContainer.innerHTML = "";
    const unlockedClues = allClues.filter((clue) =>
      unlockedCluesIds.includes(clue.id)
    );

    if (unlockedClues.length === 0) {
      cluesListContainer.innerHTML =
        "<p>Noch keine Hinweise gefunden. Löst Aufgaben, um Hinweise freizuschalten!</p>";
      return;
    }

    // Sortiere die Hinweise nach ihrer ID, damit sie immer in der gleichen Reihenfolge erscheinen
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

  renderClues();
});
