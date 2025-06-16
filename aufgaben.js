// aufgaben.js - Logik nur für die Aufgaben-Seite

document.addEventListener("DOMContentLoaded", () => {
  const tasksListContainer = document.getElementById("tasks-list");
  const modal = document.getElementById("clue-modal");
  const modalClueTitle = document.getElementById("modal-clue-title");
  const modalClueText = document.getElementById("modal-clue-text");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  let progress = loadProgress();

  function saveProgress() {
    localStorage.setItem("eragon-progress", JSON.stringify(progress));
  }

  function loadProgress() {
    const saved = localStorage.getItem("eragon-progress");
    return saved
      ? JSON.parse(saved)
      : { completedTasks: [], unlockedClues: [] };
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
      if (window.playSound) window.playSound("success");

      if (!progress.completedTasks.includes(taskId)) {
        progress.completedTasks.push(taskId);
        progress.unlockedClues.push(task.clueId);
        saveProgress();
        renderTasks();
        showHintModal(task.clueId);
      }
    } else {
      if (window.playSound) window.playSound("error");

      const inputField = document.querySelector(
        `.task-card[data-task-id="${taskId}"] .code-input`
      );
      inputField.classList.add("shake");
      setTimeout(() => inputField.classList.remove("shake"), 500);
    }
  }

  function renderTasks() {
    tasksListContainer.innerHTML = "";
    let currentDay = 0;
    tasks.forEach((task) => {
      if (task.day !== currentDay) {
        currentDay = task.day;
        const dayHeader = document.createElement("h2");
        dayHeader.className = "day-header";
        dayHeader.textContent = `Tag ${currentDay}`;
        tasksListContainer.appendChild(dayHeader);
      }
      const isCompleted = progress.completedTasks.includes(task.id);
      const taskCard = document.createElement("div");
      taskCard.className = `task-card ${isCompleted ? "erledigt" : ""}`;
      taskCard.dataset.taskId = task.id;
      taskCard.innerHTML = `
        <div class="task-header">
            <span class="task-status-icon">${isCompleted ? "✔" : "🔒"}</span>
            <h3 class="task-title">${task.id}. ${task.title}</h3>
        </div>
        <p class="task-description">${task.description}</p>
        <div class="task-action-area">
            ${
              isCompleted
                ? `<div class="task-success">
                        <span class="success-icon">✔</span>
                        <div class="success-text">
                            <span>Code Akzeptiert:</span>
                            <span class="accepted-code">${task.code}</span>
                        </div>
                    </div>`
                : `<div class="task-input-wrapper">
                        <input type="text" class="code-input" placeholder="CODE" maxlength="15">
                        <button class="check-button form-button">Bestätigen</button>
                    </div>`
            }
        </div>`;
      tasksListContainer.appendChild(taskCard);
      if (!isCompleted) {
        const inputField = taskCard.querySelector(".code-input");
        const checkButton = taskCard.querySelector(".check-button");
        checkButton.addEventListener("click", () => {
          const input = inputField.value.trim();
          if (input) checkCode(task.id, input);
        });
        inputField.addEventListener("keyup", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            checkButton.click();
          }
        });
      }
    });
  }

  modalCloseBtn.addEventListener("click", closeHintModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeHintModal();
  });

  renderTasks();
});
