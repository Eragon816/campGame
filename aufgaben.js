document.addEventListener("DOMContentLoaded", () => {
  const allClues = [
    {
      id: 1,
      type: "Zettel",
      text: '"Der beste Ort, etwas zu verstecken, ist direkt vor aller Augen."',
    },
    {
      id: 2,
      type: "SMS an Rami",
      text: '"Beruhig dich mal wieder. Ist doch nur ein Spiel. Mach keinen Blödsinn vor Wut."',
    },
    {
      id: 3,
      type: "Notiz im Mülleimer",
      text: "Ein zerknüllter Kassenzettel aus einem Pfandleihhaus in einer anderen Stadt. Der Zettel ist schon älter.",
    },
    {
      id: 4,
      type: "Einkaufszettel",
      text: 'Gefunden in Majds Jackentasche: "Snacks, Batterien, Briefmarken... wie viel ist Gold wert?" Der letzte Teil ist durchgestrichen.',
    },
    {
      id: 5,
      type: "Tagebucheintrag",
      text: 'Ein Blatt, das aus Esthers Notizbuch gefallen sein muss: "Manchmal muss man die Dinge selbst in die Hand nehmen, wenn man will, dass etwas Spannendes passiert. Alle sind so langweilig hier."',
    },
    {
      id: 6,
      type: "Gedicht",
      text: 'Auf einem Lesezeichen: "Goldener Glanz in stiller Nacht, von einem Geist davongebracht. Wo Spiele schlafen, kalt und alt, findet ihr ihn, habt ihr erst den Plan erkannt."',
    },
    {
      id: 7,
      type: "Rätsel",
      text: 'Auf eine staubige Oberfläche geschrieben: "Ich habe keinen Mund, aber erzähle Geschichten von Gestern. Was bin ich?"',
    },
    {
      id: 8,
      type: "Foto-Beschreibung (Esther)",
      text: "Auf Esthers Handy wurde ein Foto gefunden. Im Hintergrund ist undeutlich eine Gestalt mit einer Kapuze zu sehen, die sich am Kamin zu schaffen macht.",
    },
    {
      id: 9,
      type: "Zeichnung (Mahmoud)",
      text: 'Eine grobe Skizze des Pokals auf einem Notizblock, daneben steht: "ca. 1,5 kg".',
    },
    {
      id: 10,
      type: "Screenshot (Rami)",
      text: "Ein Screenshot beweist, dass das WLAN um 20:32 Uhr komplett ausgefallen ist.",
    },
    {
      id: 11,
      type: "Foto-Beschreibung (Majd)",
      text: "Ein Foto vom Sternenhimmel (21:00 Uhr). Im Display spiegelt sich eine Banking-App mit sehr niedrigem Kontostand.",
    },
    {
      id: 12,
      type: "Symbol an der Tür",
      text: "Ein kleines, mit Kreide an die Tür zum Stilleraum gemaltes Auge wurde entdeckt. Kaum zu sehen.",
    },
    {
      id: 13,
      type: "Audio-Beschreibung (Majd)",
      text: 'Eine Sprachnachricht an einen Freund: "Du glaubst nicht, was die hier für einen Schatz rumstehen haben. Wenn man den einschmelzen würde... haha, nur Spaß... oder?"',
    },
    {
      id: 14,
      type: "Audio-Beschreibung (Rami)",
      text: 'Eine wütende Sprachnachricht an einen Freund: (Wütendes Schnaufen) "Ich schwör\'s dir, ich schmeiß hier gleich was gegen die Wand! Nichts funktioniert!"',
    },
    {
      id: 15,
      type: "Audio-Beschreibung (Esther)",
      text: 'Eine Sprachnachricht an eine Freundin: "Hier ist es so lahm. Ich wünschte, es gäbe mal ein richtiges Abenteuer... Man müsste es vielleicht selbst in die Hand nehmen."',
    },
    {
      id: 16,
      type: "Audio-Beschreibung (Motaz)",
      text: 'Eine flüsternde Audio-Notiz namens "Idee": "Item 1: Der Pokal. Item 2: Das Gedicht. Item 3: Die falschen Spuren. Das wird das beste Spiel aller Zeiten..."',
    },
    {
      id: 17,
      type: "Physisches Objekt",
      text: "Ein einzelner, billiger Plastik-Schachbauer liegt auf dem Kaminsims, wo der Pokal stand.",
    },
    {
      id: 18,
      type: "Physisches Objekt",
      text: "In der Küche liegt ein Apfel mit einem einzigen, sauberen Biss darin. Niemand will ihn gegessen haben.",
    },
    {
      id: 19,
      type: "Kombinations-Hinweis",
      text: 'Der Schlüssel zum "Stilleraum" fehlt am Schlüsselbrett. Er wurde in der Tasche von Mahmouds Jacke gefunden.',
    },
    {
      id: 20,
      type: "Der finale Fundort",
      text: 'Hinweis aus dem Gedicht: "Wo Spiele schlafen"... Der Pokal muss in der Kiste mit den alten Brettspielen sein!',
    },
  ];
  const tasks = [
    {
      id: 1,
      day: 1,
      title: "Zimmer-Check Deluxe",
      description:
        'Macht ein "Vorher-Nachher"-Foto von eurem perfekt aufgeräumten Zimmer.',
      code: "ZIMMER24",
      clueId: 1,
    },
    {
      id: 2,
      day: 1,
      title: "Das 30-Sekunden-Konzert",
      description:
        "Wählt ein Lied eurer Wahl und singt es 30 Sekunden lang alle zusammen.",
      code: "MIKROFON",
      clueId: 2,
    },
    {
      id: 3,
      day: 1,
      title: "Alphabet-Körperkunst",
      description:
        "Formt mit euren Körpern auf dem Boden ein Wort, das zum Camp passt.",
      code: "BUCHSTABE",
      clueId: 3,
    },
    {
      id: 4,
      day: 1,
      title: "10-Pässe-Challenge",
      description:
        "Spielt euch einen Ball 10 Mal hintereinander zu, ohne dass er den Boden berührt.",
      code: "FLANKE99",
      clueId: 4,
    },
    {
      id: 5,
      day: 1,
      title: "Der Blinden-Zeichner",
      description:
        "Ein Teammitglied mit verbundenen Augen muss nach Anweisung der anderen eine Figur zeichnen.",
      code: "PINSELSTRICH",
      clueId: 5,
    },
    {
      id: 6,
      day: 2,
      title: "Camp-Graffiti",
      description:
        'Malt mit Kreide ein großes, farbenfrohes Bild zum Thema "Wie klingt Freundschaft?".',
      code: "KREIDEZEIT",
      clueId: 6,
    },
    {
      id: 7,
      day: 2,
      title: "Bab Al-Hara: Das lebende Bild",
      description:
        'Stellt eine berühmte Szene aus "Bab Al-Hara" für eine Minute als Standbild dar.',
      code: "SZENENBILD",
      clueId: 7,
    },
    {
      id: 8,
      day: 2,
      title: "Song-Pantomime",
      description:
        "Stellt pantomimisch ein bekanntes Lied dar, das Eragon erraten muss.",
      code: "STUMMFILM",
      clueId: 8,
    },
    {
      id: 9,
      day: 2,
      title: "Natur-Mandala",
      description:
        "Legt aus Naturmaterialien ein großes, kunstvolles Mandala auf den Boden.",
      code: "BLAETTERKUNST",
      clueId: 9,
    },
    {
      id: 10,
      day: 2,
      title: "Das Küchen-Konzert",
      description:
        "Führt einen 30-sekündigen Rhythmus nur mit Küchenutensilien auf.",
      code: "TOPFSCHLAG",
      clueId: 10,
    },
    {
      id: 11,
      day: 3,
      title: "Frisbee-Golf",
      description:
        "Trefft mit einer Frisbee 3 verschiedene Ziele mit möglichst wenigen Würfen.",
      code: "PARCOURS",
      clueId: 11,
    },
    {
      id: 12,
      day: 3,
      title: "Der längste Schatten",
      description:
        "Findet am späten Nachmittag den Punkt, an dem man den längsten Schatten wirft.",
      code: "ZEITMESSER",
      clueId: 12,
    },
    {
      id: 13,
      day: 3,
      title: "Die rollende Raupe",
      description:
        'Überwindet als "menschliche Raupe" rollend eine Strecke von 10 Metern.',
      code: "RAUPENRALLYE",
      clueId: 13,
    },
    {
      id: 14,
      day: 3,
      title: "Papierboot-Regatta",
      description:
        "Lasst ein selbstgefaltetes Papierboot eine bestimmte Distanz schwimmen.",
      code: "WELLEBRECHER",
      clueId: 14,
    },
    {
      id: 15,
      day: 3,
      title: "Schatten-Theater: Eine Camp-Legende",
      description:
        "Erzählt eine kurze Geschichte als Schattentheater hinter einem Laken.",
      code: "SILHOUETTE",
      clueId: 15,
    },
    {
      id: 16,
      day: 4,
      title: "Das Sieger-Interview",
      description:
        'Nehmt ein Video auf, in dem ihr euren Hauptverdächtigen "verhört".',
      code: "VERHOER20",
      clueId: 16,
    },
    {
      id: 17,
      day: 4,
      title: "Die geheime Botschaft",
      description:
        "Löst eine sportliche Aufgabe, um einen Hinweis auf eine versteckte Nachricht zu erhalten.",
      code: "BOTSCHAFT7",
      clueId: 17,
    },
    {
      id: 18,
      day: 4,
      title: "Das Versteck",
      description:
        "Die letzte Nachricht ist ein Bilderrätsel, das zum Versteck des Pokals führt.",
      code: "PUZZLEBILD",
      clueId: 18,
    },
    {
      id: 19,
      day: 4,
      title: "Der Fund",
      description:
        "Macht ein Foto von euch mit dem gefundenen Pokal, um den finalen Code zu erhalten.",
      code: "FINALE44",
      clueId: 19,
    },
    {
      id: 20,
      day: 4,
      title: "Das große Drehbuch",
      description:
        "Schreibt einen kurzen Plan für euren finalen Show-Act, in dem ihr den Tathergang rekonstruiert.",
      code: "REGIEPLAN",
      clueId: 20,
    },
  ];

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
      if (!progress.completedTasks.includes(taskId)) {
        progress.completedTasks.push(taskId);
        progress.unlockedClues.push(task.clueId);
        saveProgress();
        renderTasks();
        showHintModal(task.clueId);
      }
    } else {
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
                    <span class="task-status-icon">${
                      isCompleted ? "✔" : "🔒"
                    }</span>
                    <h3 class="task-title">${task.id}. ${task.title}</h3>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-action-area">
                    ${
                      isCompleted
                        ? `
                        <div class="task-success">
                            <span class="success-icon">✔</span>
                            <div class="success-text">
                                <span>Code Akzeptiert:</span>
                                <span class="accepted-code">${task.code}</span>
                            </div>
                        </div>`
                        : `
                        <div class="task-input-wrapper">
                            <input type="text" class="code-input" placeholder="CODE" maxlength="15">
                            <button class="check-button">Bestätigen</button>
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
