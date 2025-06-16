document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas-background");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particlesArray;

  const themes = {
    dark: {
      particleColor: "#ffffff",
      lineColor: "rgba(108, 106, 231, 0.4)",
    },
    light: {
      particleColor: "#2c3e50",
      lineColor: "rgba(108, 106, 231, 0.3)",
    },
  };
  let currentTheme = document.body.classList.contains("light-mode")
    ? "light"
    : "dark";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    /* ... unverändert ... */
  }
  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 2 + 1;
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      // Nutzt die Farbe des aktuellen Themes
      particlesArray.push(
        new Particle(
          x,
          y,
          directionX,
          directionY,
          size,
          themes[currentTheme].particleColor
        )
      );
    }
  }

  function animate() {
    /* ... unverändert ... */
  }

  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance =
          (particlesArray[a].x - particlesArray[b].x) ** 2 +
          (particlesArray[a].y - particlesArray[b].y) ** 2;
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          opacityValue = 1 - distance / 20000;
          // Nutzt die Farbe des aktuellen Themes
          ctx.strokeStyle = themes[currentTheme].lineColor.replace(
            /,\s*\d*\.?\d*\)/,
            `, ${opacityValue})`
          );
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  window.addEventListener("resize", () => {
    /* ... unverändert ... */
  });

  // HÖRT AUF DEN THEME-WECHSEL
  window.addEventListener("themeChanged", (e) => {
    currentTheme = e.detail.theme;
    init(); // Re-initialisiert die Partikel mit den neuen Farben
  });

  init();
  animate();
});
