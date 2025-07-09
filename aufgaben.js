
// aufgaben.js - Logik für die Aufgaben-Seite mit FIREBASE v9 Integration

// Importiert die benötigten Daten aus data.js
import { tasks, allClues } from "./data.js";

// Import der Firebase DB-Instanz und der benötigten Funktionen
import { db } from "./firebase-init.js";
import {
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("tasks-map-container");
  const currentTaskContainer = document.getElementById("current-task-display");
  const modal = document.getElementById("clue-modal");
  const modalClueTitle = document.getElementById("modal-clue-title");
  const modalClueText = document.getElementById("modal-clue-text");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  let progress = { completedTasks: [], unlockedClues: [] };
  const groupCode = localStorage.getItem("eragon-group-code");

  if (!groupCode) {
    console.error("Keine Gruppe gefunden! Umleitung zum Login.");
    window.location.href = "index.html";
    return;
  }

  const groupProgressRef = ref(db, "progress/" + groupCode);

  const dayColors = {
    1: "#e74c3c",
    2: "#3498db",
    3: "#f1c40f",
    4: "#2ecc71",
  };

  function saveProgress() {
    set(groupProgressRef, progress).catch((error) => {
      console.error("Fehler beim Speichern des Fortschritts:", error);
    });
  }

  function syncProgress() {
    onValue(groupProgressRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Sicherstellen, dass die Arrays existieren, falls sie in Firebase null sind
        progress.completedTasks = data.completedTasks || [];
        progress.unlockedClues = data.unlockedClues || [];
      } else {
        progress = { completedTasks: [], unlockedClues: [] };
        saveProgress();
      }
      renderMapAndTask();
    });
  }

  function showHintModal(clueId) {
    const clue = allClues.find((c) => c.id === clueId);
    if (!clue) return;
    modalClueTitle.textContent = `Neuer Hinweis: ${clue.type}`;
    modalClueText.textContent = clue.text;
    modal.classList.add("visible");
  }

  function closeHintModal() {
    modal.classList.remove("visible");
  }

  function checkCode(taskId, inputCode) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    if (task.code.toUpperCase() === inputCode.toUpperCase()) {
      // *** ÄNDERUNG: Die "if (window.playSound)"-Prüfung wurde entfernt, da sie redundant ist. ***
      window.playSound("success");

      if (!progress.completedTasks.includes(taskId)) {
        progress.completedTasks.push(taskId);
        if (!progress.unlockedClues.includes(task.clueId)) {
          progress.unlockedClues.push(task.clueId);
        }
        saveProgress();
        showHintModal(task.clueId);
      }
    } else {
      // *** ÄNDERUNG: Die "if (window.playSound)"-Prüfung wurde entfernt, da sie redundant ist. ***
      window.playSound("error");
      const inputField = currentTaskContainer.querySelector(".code-input");
      inputField.classList.add("shake");
      setTimeout(() => inputField.classList.remove("shake"), 500);
    }
  }

  function renderMapAndTask() {
    let currentTask = null;
    for (const task of tasks) {
      if (!progress.completedTasks.includes(task.id)) {
        currentTask = task;
        break;
      }
    }

    mapContainer.innerHTML = "";
    let currentDay = 0;

    tasks.forEach((task, index) => {
      if (task.day !== currentDay) {
        currentDay = task.day;
        const dayDivider = document.createElement("div");
        dayDivider.className = "map-day-divider";
        dayDivider.dataset.day = currentDay;
        dayDivider.innerHTML = `<span>Tag ${currentDay}</span>`;
        mapContainer.appendChild(dayDivider);
      }

      const node = document.createElement("div");
      node.className = "map-node";
      node.dataset.taskId = task.id;
      node.dataset.day = task.day;

      const nextTask = tasks[index + 1];
      if (!nextTask || nextTask.day !== task.day) {
        node.classList.add("is-day-end");
      }

      if (progress.completedTasks.includes(task.id)) {
        node.classList.add("completed");
        node.innerHTML = `<span>✔</span>`;
      } else if (currentTask && task.id === currentTask.id) {
        node.classList.add("active");
        node.innerHTML = `<span>${task.id}</span>`;
      } else {
        node.classList.add("locked");
        node.innerHTML = `<span class="lock-icon">🔒</span>`;
      }
      mapContainer.appendChild(node);
    });

    if (currentTask) {
      currentTaskContainer.style.display = "block";
      const color = dayColors[currentTask.day] || "var(--primary-color)";
      currentTaskContainer.innerHTML = `
        <div class="task-card active-task" style="--day-color: ${color};">
            <div class="task-header">
                <h3 class="task-title">${currentTask.id}. ${currentTask.title}</h3>
            </div>
            <p class="task-description">${currentTask.description}</p>
            <div class="task-action-area">
                <div class="task-input-wrapper">
                    <input type="text" class="code-input" placeholder="CODE" maxlength="15">
                    <button class="check-button form-button">Bestätigen</button>
                </div>
            </div>
        </div>`;

      const inputField = currentTaskContainer.querySelector(".code-input");
      const checkButton = currentTaskContainer.querySelector(".check-button");

      checkButton.addEventListener("click", () => {
        const input = inputField.value.trim();
        if (input) checkCode(currentTask.id, input);
      });

      inputField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          checkButton.click();
        }
      });
    } else {
      currentTaskContainer.style.display = "block";
      currentTaskContainer.innerHTML = `
        <div class="task-card erledigt">
            <h3 style="text-align: center; color: var(--success-color);">🎉 Fantastisch! 🎉</h3>
            <p style="text-align: center;">Ihr habt alle Aufgaben gemeistert und alle Hinweise gesammelt. Geht zur Hinweise-Seite, um eure finalen Schlüsse zu ziehen!</p>
        </div>`;
    }
  }

  modalCloseBtn.addEventListener("click", closeHintModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeHintModal();
  });

  syncProgress();
});
