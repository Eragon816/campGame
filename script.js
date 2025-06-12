// Wir warten, bis die gesamte HTML-Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // Alle Navigations-Buttons und Inhalts-Sektionen holen
  const navButtons = document.querySelectorAll(".nav-button");
  const contentSections = document.querySelectorAll(".content-section");

  // Für jeden Button eine Klick-Funktion hinzufügen
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Die Ziel-ID aus dem 'data-target' Attribut des Buttons auslesen
      const targetId = button.dataset.target + "-content";
      const targetSection = document.getElementById(targetId);

      // 1. Alle Buttons als "inaktiv" markieren
      navButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // 2. Alle Inhalts-Sektionen ausblenden
      contentSections.forEach((section) => {
        section.classList.remove("active");
      });

      // 3. Den angeklickten Button als "aktiv" markieren
      button.classList.add("active");

      // 4. Die Ziel-Sektion einblenden
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});
