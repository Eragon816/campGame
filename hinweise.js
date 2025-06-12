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
