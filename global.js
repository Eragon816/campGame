// global.js - Enthält ALLE gemeinsamen und globalen Funktionen

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. THEME-LOGIK ---
  const themeBtn = document.getElementById("theme-btn");
  const applyTheme = (theme) => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme + "-mode");
    if (themeBtn) {
      themeBtn.innerHTML =
        theme === "dark" ? "<span>☀️</span>" : "<span>🌙</span>";
    }
    localStorage.setItem("theme", theme);
    window.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { theme: theme } })
    );
  };

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      let currentTheme = localStorage.getItem("theme") || "dark";
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
    });
  }
  // Initiales Theme anwenden
  applyTheme(localStorage.getItem("theme") || "dark");

  // --- 2. SOUND-LOGIK ---
  const backgroundMusic = new Audio("./sound/background-music.mp3");
  backgroundMusic.loop = true;
  const clickSound = new Audio("./sound/click.mp3");
  const successSound = new Audio("./sound/success.mp3");
  const errorSound = new Audio("./sound/error.mp3");

  const muteBtn = document.getElementById("mute-btn");
  let isMuted = localStorage.getItem("isMuted") === "true";

  const updateMuteState = () => {
    isMuted = localStorage.getItem("isMuted") === "true";
    backgroundMusic.muted = isMuted;
    clickSound.muted = isMuted;
    successSound.muted = isMuted;
    errorSound.muted = isMuted;
    if (muteBtn) {
      muteBtn.innerHTML = isMuted ? "<span>🔇</span>" : "<span>🔊</span>";
    }
  };

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      localStorage.setItem("isMuted", isMuted);
      updateMuteState();
    });
  }

  window.playSound = (soundType) => {
    if (isMuted) return;
    let soundToPlay;
    switch (soundType) {
      case "click":
        soundToPlay = clickSound;
        break;
      case "success":
        soundToPlay = successSound;
        break;
      case "error":
        soundToPlay = errorSound;
        break;
    }
    if (soundToPlay) {
      soundToPlay.currentTime = 0;
      soundToPlay.play().catch((e) => {});
    }
  };

  window.startMusic = () => {
    localStorage.setItem("music-was-started", "true");
    if (!isMuted) {
      backgroundMusic.play().catch((e) => {});
    }
  };

  if (localStorage.getItem("music-was-started") === "true") {
    if (!isMuted) {
      backgroundMusic.play().catch((e) => {});
    }
  }

  // Initialen Mute-Status anwenden
  updateMuteState();

  // --- 3. SESSION-INFO & LOGOUT-LOGIK ---
  const teamNameDisplay = document.querySelector("#display-team-name");
  const logoutBtn = document.querySelector("#logout-btn");

  if (teamNameDisplay) {
    const teamName = localStorage.getItem("eragon-team-name");
    if (teamName) {
      teamNameDisplay.textContent = teamName;
    } else {
      window.location.href = "index.html";
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.playSound("click");

      localStorage.removeItem("eragon-team-name");
      localStorage.removeItem("eragon-team-code");
      localStorage.removeItem("eragon-progress");
      localStorage.removeItem("music-was-started");
      localStorage.removeItem("theme");
      localStorage.removeItem("isMuted");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 150);
    });
  }

  // --- 4. GLOBALE BUTTON-KLICK-SOUNDS ---
  document
    .querySelectorAll(
      ".form-button, .menu-button, .back-button, #modal-close-btn, #enter-game-btn"
    )
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        window.playSound("click");
        if (
          button.tagName === "A" &&
          button.href &&
          !button.href.endsWith("#")
        ) {
          e.preventDefault();
          const destination = button.href;
          setTimeout(() => {
            window.location.href = destination;
          }, 150);
        }
      });
    });
});
