// data.js - Zentrale Spieldaten für die Eragon Challenge

// 'export' hinzugefügt, damit andere Module darauf zugreifen können
export const allClues = [
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

// 'export' hinzugefügt, damit andere Module darauf zugreifen können
export const tasks = [
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
    // GEÄNDERT
    id: 3,
    day: 1,
    title: "Der menschliche Knoten",
    description:
      "Stellt euch im Kreis auf, greift über Kreuz die Hände von zwei verschiedenen Personen und versucht dann, den Knoten zu entwirren, ohne die Hände loszulassen, bis ihr wieder in einem Kreis steht.",
    code: "KNOTENLOS",
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
    // GEÄNDERT
    id: 8,
    day: 2,
    title: "Camp-Flashmob",
    description:
      "Erfindet eine 30-sekündige Choreographie zu einem bekannten Hit oder einem Camp-Lied und führt sie alle gemeinsam als 'Flashmob' auf.",
    code: "CAMPGROOVE",
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
    // GEÄNDERT
    id: 12,
    day: 3,
    title: "Die Farben-Jagd",
    description:
      "Findet und präsentiert Eragon für jede der folgenden Farben einen Gegenstand aus der Natur: Rot, Gelb, Grün, Braun und Weiß (z.B. eine rote Beere, ein gelbes Blatt, Moos, ein Stück Rinde, ein weißer Kieselstein).",
    code: "REGENBOGEN7",
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
    // GEÄNDERT
    id: 14,
    day: 3,
    title: "Das Natur-Maskottchen",
    description:
      "Baut nur aus Naturmaterialien, die ihr im Camp findet (Zweige, Blätter, Steine, Zapfen etc.), ein kleines Maskottchen, das euer Team repräsentiert.",
    code: "WALDGEIST",
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
    // GEÄNDERT
    id: 17,
    day: 4,
    title: "Der Wasserträger-Staffellauf",
    description:
      "Jedes Teammitglied muss nacheinander eine kurze Strecke mit einem bis zum Rand gefüllten Becher Wasser zurücklegen und das restliche Wasser in einen Eimer schütten. Der Code wird vergeben, wenn der Eimer eine bestimmte Markierung erreicht hat.",
    code: "NASSGEMACHT",
    clueId: 17,
  },
  {
    // GEÄNDERT
    id: 18,
    day: 4,
    title: "Die Lagerfeuer-Geschichte",
    description:
      "Erfindet gemeinsam eine kurze (ca. 1 Minute lange), gruselige oder lustige Camp-Geschichte. Jedes Teammitglied muss dabei mindestens einen Satz zur Geschichte beitragen.",
    code: "GESCHICHTE88",
    clueId: 18,
  },
  {
    // GEÄNDERT
    id: 19,
    day: 4,
    title: "Der Schlachtruf der Ermittler",
    description:
      "Dichtet einen kurzen, lauten Schlachtruf oder einen Team-Gesang für eure Gruppe, der eure Entschlossenheit als Ermittler zeigt. Tragt ihn gemeinsam und kraftvoll vor.",
    code: "TEAMGEIST24",
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
