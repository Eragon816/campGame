// aufgaben.js - Logik für die Aufgaben-Seite mit FIREBASE v9 Integration
import { tasks } from "./data.js";
import { translations } from "./translations.js";
import { db } from "./firebase-init.js";
import {
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// --- Hilfsfunktionen für deterministisches Mischen (unverändert) ---
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

function seededRandom(seed) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280.0;
  };
}

function shuffleArrayWithSeed(array, seedString) {
  const newArr = [...array];
  const seed = hashCode(seedString);
  const random = seededRandom(seed);
  let currentIndex = newArr.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }
  return newArr;
}

/**
 * NEU: Mischt die Aufgaben so, dass die Aufgaben von Tag 4 (grün) immer am Ende stehen.
 * @param {Array} allTasks - Das ursprüngliche Aufgaben-Array.
 * @param {string} seedString - Der Gruppencode zum Seeden des Mischens.
 * @returns {Array} Ein Array, bei dem Tag 1-3 gemischt am Anfang und Tag 4 gemischt am Ende stehen.
 */
function getShuffledTasksWithFinalsLast(allTasks, seedString) {
  // 1. Trenne die Aufgaben in "normale" und "finale"
  const normalTasks = allTasks.filter((task) => task.day < 4);
  const finalTasks = allTasks.filter((task) => task.day === 4);

  // 2. Mische beide Gruppen separat
  const shuffledNormal = shuffleArrayWithSeed(normalTasks, seedString);
  const shuffledFinals = shuffleArrayWithSeed(
    finalTasks,
    `${seedString}-final`
  ); // Eigener Seed für die Final-Gruppe

  // 3. Führe die Listen zusammen
  return [...shuffledNormal, ...shuffledFinals];
}

document.addEventListener("DOMContentLoaded", () => {
  const tasksListContainer = document.getElementById("tasks-list-container");
  const allTasksDoneMessageContainer = document.getElementById(
    "all-tasks-done-message"
  );
  const modal = document.getElementById("clue-modal");
  const modalClueTitle = document.getElementById("modal-clue-title");
  const modalClueText = document.getElementById("modal-clue-text");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const taskListItemTemplate = document.getElementById(
    "task-list-item-template"
  );
  const loader = document.getElementById("loader");
  const pageContent = document.querySelector(".page-content");

  const groupCode = localStorage.getItem("eragon-group-code");
  if (!groupCode) {
    console.error("Keine Gruppe gefunden! Umleitung zum Login.");
    window.location.href = "index.html";
    return;
  }

  // NEU: Nutzt die neue Misch-Funktion
  const shuffledTasks = getShuffledTasksWithFinalsLast(tasks, groupCode);

  let progress = { completedTasks: [], unlockedClues: [] };
  const groupProgressRef = ref(db, "progress/" + groupCode);
  const dayColors = { 1: "#e74c3c", 2: "#3498db", 3: "#f1c40f", 4: "#2ecc71" };

  const showLoader = (isLoading) => {
    loader.style.display = isLoading ? "block" : "none";
    pageContent.dataset.loading = String(isLoading);
  };

  function saveProgress() {
    set(groupProgressRef, progress).catch((error) =>
      console.error("Fehler beim Speichern:", error)
    );
  }

  function syncProgress() {
    onValue(
      groupProgressRef,
      (snapshot) => {
        try {
          const data = snapshot.val();
          progress.completedTasks = data?.completedTasks || [];
          progress.unlockedClues = data?.unlockedClues || [];
          renderPage();
        } catch (error) {
          console.error("Fehler beim Rendern der Seite:", error);
          tasksListContainer.innerHTML =
            "<p>Ein Fehler ist aufgetreten. Bitte lade die Seite neu.</p>";
        } finally {
          showLoader(false);
        }
      },
      (error) => {
        console.error("Firebase-Fehler:", error);
        showLoader(false);
        tasksListContainer.innerHTML =
          "<p>Fehler beim Laden der Spieldaten.</p>";
      }
    );
  }

  function showHintModal(clueId) {
    const lang = localStorage.getItem("language") || "de";
    const clueTranslation = translations[lang].clues[clueId - 1];
    if (!clueTranslation) return;

    modalClueTitle.textContent = `${translations[lang].clue_modal_title} ${clueTranslation.type}`;
    modalClueText.textContent = clueTranslation.text;
    modal.classList.add("visible");
  }

  function closeHintModal() {
    modal.classList.remove("visible");
  }

  function checkCode(taskId, inputCode, inputField) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    if (task.code.toUpperCase() === inputCode.toUpperCase()) {
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
      window.playSound("error");
      if (inputField) {
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 500);
      }
    }
  }

  function renderPage() {
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];
    tasksListContainer.innerHTML = "";
    allTasksDoneMessageContainer.style.display = "none";

    const currentTaskIndex = shuffledTasks.findIndex(
      (task) => !progress.completedTasks.includes(task.id)
    );

    const tasksToRender =
      currentTaskIndex === -1
        ? shuffledTasks
        : shuffledTasks.slice(0, currentTaskIndex + 1);

    tasksToRender.forEach((task, index) => {
      const taskTranslation = trans.tasks[task.id - 1];
      if (!taskTranslation || !taskListItemTemplate) return;

      const cardClone = taskListItemTemplate.content.cloneNode(true);
      const cardElement = cardClone.querySelector(".task-list-item");
      const statusIcon = cardClone.querySelector(".task-status-icon");
      const actionArea = cardClone.querySelector(".task-action-area");

      cardElement.querySelector(".task-title").textContent =
        taskTranslation.title;
      cardElement.querySelector(".task-description").textContent =
        taskTranslation.description;

      // ENTFERNT: Die Tages-Anzeige wird nicht mehr befüllt

      const dayColor = dayColors[task.day] || "var(--primary-color)";
      cardElement.style.setProperty("--task-day-color", dayColor);

      if (currentTaskIndex !== -1 && index === currentTaskIndex) {
        cardElement.classList.add("active");
        statusIcon.innerHTML = "<span>▶</span>";
        actionArea.style.display = "block";

        const inputField = actionArea.querySelector(".code-input");
        const checkButton = actionArea.querySelector(".check-button");
        inputField.placeholder = trans.task_code_placeholder;
        checkButton.textContent = trans.confirm_btn;
        checkButton.dataset.taskId = task.id;
      } else {
        cardElement.classList.add("completed");
        statusIcon.innerHTML = "<span>✔</span>";
      }

      tasksListContainer.appendChild(cardClone);
    });

    if (currentTaskIndex === -1) {
      allTasksDoneMessageContainer.style.display = "block";
      allTasksDoneMessageContainer.innerHTML = `
            <div class="task-card erledigt">
                <h3 style="text-align: center; color: var(--success-color);">${trans.tasks_all_done_title}</h3>
                <p style="text-align: center;">${trans.tasks_all_done_text}</p>
            </div>`;
    }
  }

  tasksListContainer.addEventListener("click", (e) => {
    if (e.target.matches(".check-button")) {
      const taskId = parseInt(e.target.dataset.taskId, 10);
      const inputField = e.target
        .closest(".task-input-wrapper")
        .querySelector(".code-input");
      const input = inputField ? inputField.value.trim() : "";
      if (taskId && input) {
        checkCode(taskId, input, inputField);
      }
    }
  });

  tasksListContainer.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target.matches(".code-input")) {
      e.preventDefault();
      e.target
        .closest(".task-action-area")
        .querySelector(".check-button")
        ?.click();
    }
  });

  modalCloseBtn.addEventListener("click", closeHintModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeHintModal();
  });

  window.addEventListener("languageChanged", renderPage);

  showLoader(true);
  syncProgress();
});
