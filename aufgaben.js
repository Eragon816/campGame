// aufgaben.js - Logik für die Aufgaben-Seite mit FIREBASE v9 Integration
import { tasks } from "./data.js";
import { translations } from "./translations.js";
import { db } from "./firebase-init.js";
import {
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  // HTML-Elemente holen
  const mapContainer = document.getElementById("tasks-map-container");
  const currentTaskContainer = document.getElementById("current-task-display");
  const modal = document.getElementById("clue-modal");
  const modalClueTitle = document.getElementById("modal-clue-title");
  const modalClueText = document.getElementById("modal-clue-text");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const taskCardTemplate = document.getElementById("task-card-template");
  const loader = document.getElementById("loader");
  const pageContent = document.querySelector(".page-content");

  // Lokale Variablen
  let progress = { completedTasks: [], unlockedClues: [] };
  const groupCode = localStorage.getItem("eragon-group-code");

  // Sicherheits-Check: Ohne Gruppe kein Spiel
  if (!groupCode) {
    console.error("Keine Gruppe gefunden! Umleitung zum Login.");
    window.location.href = "index.html";
    return;
  }

  // Firebase Referenz und Konstanten
  const groupProgressRef = ref(db, "progress/" + groupCode);
  const dayColors = { 1: "#e74c3c", 2: "#3498db", 3: "#f1c40f", 4: "#2ecc71" };

  // --- Ladeanzeige-Funktionen ---
  const showLoader = (isLoading) => {
    loader.style.display = isLoading ? "block" : "none";
    // KORREKTUR: Wir setzen das Attribut als String, um Konsistenz zu gewährleisten.
    pageContent.dataset.loading = String(isLoading);
  };

  // --- Firebase-Funktionen ---
  function saveProgress() {
    set(groupProgressRef, progress).catch((error) =>
      console.error("Fehler beim Speichern:", error)
    );
  }

  function syncProgress() {
    onValue(
      groupProgressRef,
      (snapshot) => {
        const data = snapshot.val();
        progress.completedTasks = data?.completedTasks || [];
        progress.unlockedClues = data?.unlockedClues || [];
        renderPage();
        showLoader(false); // Nach dem Rendern den Loader ausblenden und Inhalt zeigen
      },
      (error) => {
        console.error("Firebase-Fehler:", error);
        showLoader(false); // Auch bei Fehler den Loader ausblenden
        pageContent.innerHTML = "<p>Fehler beim Laden der Spieldaten.</p>";
      }
    );
  }

  // --- UI-Funktionen ---
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

  function checkCode(taskId, inputCode) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    if (task.code.toUpperCase() === inputCode.toUpperCase()) {
      window.playSound("success");
      if (!progress.completedTasks.includes(taskId)) {
        progress.completedTasks.push(taskId);
        if (!progress.unlockedClues.includes(task.clueId)) {
          progress.unlockedClues.push(task.clueId);
        }
        saveProgress(); // Löst via onValue ein Neu-Rendern aus
        showHintModal(task.clueId);
      }
    } else {
      window.playSound("error");
      const inputField = currentTaskContainer.querySelector(".code-input");
      if (inputField) {
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 500);
      }
    }
  }

  // --- Render-Funktionen ---
  function renderPage() {
    renderMap();
    renderCurrentTask();
  }

  function renderMap() {
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];
    const currentTask = tasks.find(
      (task) => !progress.completedTasks.includes(task.id)
    );
    const currentTaskId = currentTask ? currentTask.id : null;

    mapContainer.innerHTML = "";
    let currentDay = 0;

    tasks.forEach((task, index) => {
      if (task.day !== currentDay) {
        currentDay = task.day;
        const dayDivider = document.createElement("div");
        dayDivider.className = "map-day-divider";
        dayDivider.dataset.day = currentDay;
        dayDivider.innerHTML = `<span>${trans.tasks_day_prefix} ${currentDay}</span>`;
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
      } else if (task.id === currentTaskId) {
        node.classList.add("active");
        node.innerHTML = `<span>${task.id}</span>`;
      } else {
        node.classList.add("locked");
        node.innerHTML = `<span class="lock-icon">🔒</span>`;
      }
      mapContainer.appendChild(node);
    });
  }

  function renderCurrentTask() {
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];
    const currentTask = tasks.find(
      (task) => !progress.completedTasks.includes(task.id)
    );

    currentTaskContainer.innerHTML = ""; // Container immer leeren

    if (currentTask && taskCardTemplate) {
      const taskTranslation = trans.tasks[currentTask.id - 1];
      if (!taskTranslation) {
        console.error(
          `Keine Übersetzung für Task ID ${currentTask.id} gefunden.`
        );
        return;
      }
      const cardClone = taskCardTemplate.content.cloneNode(true);
      const cardElement = cardClone.querySelector(".task-card");
      const checkButton = cardClone.querySelector(".check-button");

      cardElement.style.setProperty(
        "--day-color",
        dayColors[currentTask.day] || "var(--primary-color)"
      );
      cardElement.querySelector(
        ".task-title"
      ).textContent = `${currentTask.id}. ${taskTranslation.title}`;
      cardElement.querySelector(".task-description").textContent =
        taskTranslation.description;
      cardElement.querySelector(".code-input").placeholder =
        trans.task_code_placeholder;

      checkButton.textContent = trans.confirm_btn;
      checkButton.dataset.taskId = currentTask.id;

      currentTaskContainer.appendChild(cardClone);
    } else if (!currentTask) {
      currentTaskContainer.innerHTML = `
        <div class="task-card erledigt">
            <h3 style="text-align: center; color: var(--success-color);">${trans.tasks_all_done_title}</h3>
            <p style="text-align: center;">${trans.tasks_all_done_text}</p>
        </div>`;
    }
  }

  // --- Event Listener ---
  currentTaskContainer.addEventListener("click", (e) => {
    if (e.target.matches(".check-button")) {
      const taskId = parseInt(e.target.dataset.taskId, 10);
      const inputField = currentTaskContainer.querySelector(".code-input");
      const input = inputField ? inputField.value.trim() : "";
      if (taskId && input) {
        checkCode(taskId, input);
      }
    }
  });

  currentTaskContainer.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target.matches(".code-input")) {
      e.preventDefault();
      currentTaskContainer.querySelector(".check-button")?.click();
    }
  });

  modalCloseBtn.addEventListener("click", closeHintModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeHintModal();
  });

  window.addEventListener("languageChanged", renderPage);

  // --- Initialisierung ---
  showLoader(true);
  syncProgress();
});
