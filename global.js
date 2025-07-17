// global.js - Enthält ALLE gemeinsamen und globalen Funktionen
import { translations } from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- GRUPPENFARBE ANWENDEN ---
  const groupColor = localStorage.getItem("eragon-group-color");
  if (groupColor) {
    document.body.style.setProperty("--primary-color", groupColor);
  }

  // --- 1. SPRACH-LOGIK (NEU) ---
  const langBtn = document.getElementById("lang-btn");
  let currentLang = localStorage.getItem("language") || "de";

  const applyTranslations = () => {
    const lang = localStorage.getItem("language") || "de";
    const trans = translations[lang];

    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.dataset.translate;
      if (trans[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = trans[key];
        } else {
          el.innerHTML = trans[key];
        }
      }
    });

    // Setzt den Titel des HTML-Dokuments
    const pageTitleKey = document.body.dataset.pageTitleKey;
    if (pageTitleKey && trans[pageTitleKey]) {
      document.title = trans[pageTitleKey];
    }

    // Setzt die Sprache und Textrichtung für CSS
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", lang === "ar");
  };

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("language", lang);
    if (langBtn) {
      langBtn.textContent = translations[lang].lang_btn_text;
    }
    applyTranslations();
    // Eigene Events auslösen, damit andere Skripte reagieren können (z.B. Aufgaben neu rendern)
    window.dispatchEvent(new CustomEvent("languageChanged"));
  };

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const newLang = currentLang === "de" ? "ar" : "de";
      setLanguage(newLang);
    });
  }

  // Initiale Sprache setzen
  setLanguage(currentLang);

  // --- 2. THEME-LOGIK ---
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
  applyTheme(localStorage.getItem("theme") || "dark");

  // --- 3. SOUND-LOGIK --- (unverändert)
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

  if (localStorage.getItem("music-was-started") === "true" && !isMuted) {
    backgroundMusic.play().catch((e) => {});
  }
  updateMuteState();

  // --- 4. SESSION-INFO & LOGOUT-LOGIK ---
  const teamNameDisplay = document.querySelector("#display-team-name");
  const logoutBtn = document.querySelector("#logout-btn");
  const teamAvatarDisplay = document.getElementById("team-avatar-display"); // KORRIGIERT: Avatar-Element holen

  if (teamNameDisplay) {
    const teamName = localStorage.getItem("eragon-team-name");
    if (teamName) {
      teamNameDisplay.textContent = teamName;
    } else {
      // Wenn kein Teamname da ist, zurück zum Login
      if (!window.location.pathname.endsWith("index.html")) {
        window.location.href = "index.html";
      }
    }
  }

  // KORRIGIERT: Avatar-Anzeige-Logik hierher verschoben
  if (teamAvatarDisplay) {
    const teamAvatar = localStorage.getItem("eragon-team-avatar");
    if (teamAvatar) {
      teamAvatarDisplay.textContent = teamAvatar;
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.playSound("click");

      // Alle relevanten Daten aus dem Local Storage entfernen
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("eragon-") || key.startsWith("avatar-for-group-")) {
          localStorage.removeItem(key);
        }
      });
      localStorage.removeItem("music-was-started");
      localStorage.removeItem("theme");
      localStorage.removeItem("isMuted");
      localStorage.removeItem("language");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 150);
    });
  }

  // --- 5. GLOBALE BUTTON-KLICK-SOUNDS ---
  document
    .querySelectorAll(
      ".form-button, .menu-button, .back-button, #modal-close-btn, #enter-game-btn, .suspect-card"
    )
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        // Verhindert Klick-Sound für non-A-Tags, die ein A-Tag als Parent haben (doppelter Sound)
        if (e.target.closest("a") !== button && button.tagName !== "A") {
          // do nothing
        } else {
          window.playSound("click");
        }

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
