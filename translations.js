// translations.js

export const translations = {
  // =================================================================
  // DEUTSCHE ÜBERSETZUNGEN (unverändert)
  // =================================================================
  de: {
    // ... (keine Änderungen hier)
    // Globale Elemente & Buttons
    lang_btn_text: "AR",
    team_text: "Team",
    logout_btn_text: "Team verlassen",
    back_to_menu_btn: "← Zurück zum Menü",
    confirm_btn: "Bestätigen",
    clue_modal_title: "Neuer Hinweis!",
    clue_modal_button: "Super!",

    // Login-Seite (index.html)
    login_page_title: "Der Hayat-Code - Gruppe beitreten",
    main_title: "Der Hayat-Code",
    enter_game_btn: "Spiel betreten",
    join_group_title: "Gruppe beitreten",
    group_select_placeholder: "-- Wähle deine Gruppe --",
    group_code_placeholder: "Gruppen-Code eingeben",
    join_group_btn: "Spiel starten",
    login_error_empty: "Bitte wähle eine Gruppe und gib den Code ein.",
    login_error_wrong: "Der Gruppen-Code ist falsch. Versuche es erneut.",

    // Menü-Seite (menu.html)
    menu_page_title: "Der Hayat-Code - Menü",
    menu_button_fall: "Fall",
    menu_button_verdaechtigte: "Verdächtigte",
    menu_button_hinweise: "Hinweise",
    menu_button_aufgaben: "Aufgaben",

    // Fall-Seite (fall.html)
    fall_page_title: "Der Fall - Der Hayat-Code",
    fall_title: "Der Fall",
    fall_p1:
      "Der Pokal ist weg. Gestohlen gestern zwischen 20:00 und 21:30 Uhr aus dem Gemeinschaftsraum. Der Raum war belebt, aber niemand will etwas gesehen haben. Es gibt keine Zeugen des Diebstahls selbst, nur eine Reihe von seltsamen Vorkommnissen und Objekten, die zurückgeblieben sind.",
    fall_mission_title: "Die Mission",
    fall_mission_p1:
      'Die Teams schlüpfen in die Rolle von "Ermittlern". Ihre Mission ist es, die Herausforderungen des Diebes zu meistern, um zu beweisen, dass sie würdig sind. Mit jeder erfolgreich absolvierten Aufgabe sammeln sie Hinweise, die sie dem Täter, seinem Motiv und dem Tathergang näherbringen. Die Zeit drängt, denn der große Camp-Abschlussabend steht bevor!',
    fall_questions_title: "Die finalen Fragen (am Ende des Spiels)",
    fall_question1: "WER war der Täter?",
    fall_question2:
      "WIE hat er den Diebstahl genau durchgeführt? (Der Tathergang)",

    // Verdächtigte-Seite (verdaechtigte.html)
    suspects_page_title: "Verdächtigte - Der Hayat-Code",
    suspects_title: "Die Verdächtigen",
    suspect_mahmoud_quote:
      '"Ich saß auf dem Sofa, hatte meine Kopfhörer auf und hab einfach nur entspannt. Leute sind rein und raus, aber ich hab auf nichts geachtet. Ich bin der Falsche, um was gesehen zu haben."',
    suspect_majd_quote:
      '"Ich war die meiste Zeit draußen, der Empfang ist einfach besser. Ich hab mit meiner Familie telefoniert. Als ich wieder reinkam, war die Stimmung schon komisch. Ich hab nichts mitbekommen."',
    suspect_esther_quote:
      '"Ich hab mich furchtbar über Rami geärgert, weil er so rücksichtslos an mir vorbeigestürmt ist, als ich gerade in der Küche war. Später habe ich dann gehört, dass der Pokal weg ist. Vielleicht war er so wütend, dass er ihn einfach mitgenommen hat."',
    suspect_rami_quote:
      '"Ja, ich war sauer, weil das WLAN für die Online-Games so mies ist. Ich bin in den Keller, um mich abzureagieren. Als ich hochkam, war Esther total komisch zu mir. Keine Ahnung, was ihr Problem ist. Mit dem Pokal hab ich nichts am Hut."',
    suspect_motaz_quote:
      '"Ich war auf meinem Zimmer und habe gelesen. Ich bin nur einmal kurz runter, um am Automaten was zu trinken zu holen. Da schien noch alles normal zu sein. Ich finde es aber seltsam, dass der Pokal einfach so verschwindet, wenn doch die ganze Zeit jemand wie Mahmoud direkt davor saß."',

    // Hinweise-Seite (hinweise.html)
    clues_page_title: "Hinweise - Der Hayat-Code",
    clues_title: "Gesammelte Hinweise",
    no_clues_found:
      "Noch keine Hinweise gefunden. Löst Aufgaben, um Hinweise freizuschalten!",

    // Aufgaben-Seite (aufgaben.html)
    tasks_page_title: "Aufgaben - Der Hayat-Code",
    tasks_title: "Aufgaben-Karte",
    task_code_placeholder: "CODE",
    tasks_day_prefix: "Tag",
    tasks_all_done_title: "🎉 Fantastisch! 🎉",
    tasks_all_done_text:
      "Ihr habt alle Aufgaben gemeistert und alle Hinweise gesammelt. Geht zur Hinweise-Seite, um eure finalen Schlüsse zu ziehen!",

    // Aufgaben (ersetzen Titel und Beschreibung aus data.js)
    tasks: [
      {
        title: "Zimmer-Check Deluxe",
        description:
          'Macht ein "Vorher-Nachher"-Foto von eurem perfekt aufgeräumten Zimmer.',
      },
      {
        title: "Das 30-Sekunden-Konzert",
        description:
          "Wählt ein Lied eurer Wahl und singt es 30 Sekunden lang alle zusammen.",
      },
      {
        title: "Der menschliche Knoten",
        description:
          "Stellt euch im Kreis auf, greift über Kreuz die Hände von zwei verschiedenen Personen und versucht dann, den Knoten zu entwirren, ohne die Hände loszulassen, bis ihr wieder in einem Kreis steht.",
      },
      {
        title: "10-Pässe-Challenge",
        description:
          "Spielt euch einen Ball 10 Mal hintereinander zu, ohne dass er den Boden berührt.",
      },
      {
        title: "Der Blinden-Zeichner",
        description:
          "Ein Teammitglied mit verbundenen Augen muss nach Anweisung der anderen eine Figur zeichnen.",
      },
      {
        title: "Camp-Graffiti",
        description:
          'Malt mit Kreide ein großes, farbenfrohes Bild zum Thema "Wie klingt Freundschaft?".',
      },
      {
        title: "Bab Al-Hara: Das lebende Bild",
        description:
          'Stellt eine berühmte Szene aus "Bab Al-Hara" für eine Minute als Standbild dar.',
      },
      {
        title: "Camp-Flashmob",
        description:
          "Erfindet eine 30-sekündige Choreographie zu einem bekannten Hit oder einem Camp-Lied und führt sie alle gemeinsam als 'Flashmob' auf.",
      },
      {
        title: "Natur-Mandala",
        description:
          "Legt aus Naturmaterialien ein großes, kunstvolles Mandala auf den Boden.",
      },
      {
        title: "Das Küchen-Konzert",
        description:
          "Führt einen 30-sekündigen Rhythmus nur mit Küchenutensilien auf.",
      },
      {
        title: "Frisbee-Golf",
        description:
          "Trefft mit einer Frisbee 3 verschiedene Ziele mit möglichst wenigen Würfen.",
      },
      {
        title: "Die Farben-Jagd",
        description:
          "Findet und präsentiert Eragon für jede der folgenden Farben einen Gegenstand aus der Natur: Rot, Gelb, Grün, Braun und Weiß (z.B. eine rote Beere, ein gelbes Blatt, Moos, ein Stück Rinde, ein weißer Kieselstein).",
      },
      {
        title: "Die rollende Raupe",
        description:
          'Überwindet als "menschliche Raupe" rollend eine Strecke von 10 Metern.',
      },
      {
        title: "Das Natur-Maskottchen",
        description:
          "Baut nur aus Naturmaterialien, die ihr im Camp findet (Zweige, Blätter, Steine, Zapfen etc.), ein kleines Maskottchen, das euer Team repräsentiert.",
      },
      {
        title: "Schatten-Theater: Eine Camp-Legende",
        description:
          "Erzählt eine kurze Geschichte als Schattentheater hinter einem Laken.",
      },
      {
        title: "Das Sieger-Interview",
        description:
          'Nehmt ein Video auf, in dem ihr euren Hauptverdächtigen "verhört".',
      },
      {
        title: "Der Wasserträger-Staffellauf",
        description:
          "Jedes Teammitglied muss nacheinander eine kurze Strecke mit einem bis zum Rand gefüllten Becher Wasser zurücklegen und das restliche Wasser in einen Eimer schütten. Der Code wird vergeben, wenn der Eimer eine bestimmte Markierung erreicht hat.",
      },
      {
        title: "Die Lagerfeuer-Geschichte",
        description:
          "Erfindet gemeinsam eine kurze (ca. 1 Minute lange), gruselige oder lustige Camp-Geschichte. Jedes Teammitglied muss dabei mindestens einen Satz zur Geschichte beitragen.",
      },
      {
        title: "Der Schlachtruf der Ermittler",
        description:
          "Dichtet einen kurzen, lauten Schlachtruf oder einen Team-Gesang für eure Gruppe, der eure Entschlossenheit als Ermittler zeigt. Tragt ihn gemeinsam und kraftvoll vor.",
      },
      {
        title: "Das große Drehbuch",
        description:
          "Schreibt einen kurzen Plan für euren finalen Show-Act, in dem ihr den Tathergang rekonstruiert.",
      },
    ],

    // Hinweise (ersetzen Text und Typ aus data.js)
    clues: [
      {
        type: "Zettel",
        text: '"Der beste Ort, etwas zu verstecken, ist direkt vor aller Augen."',
      },
      {
        type: "SMS an Rami",
        text: '"Beruhig dich mal wieder. Ist doch nur ein Spiel. Mach keinen Blödsinn vor Wut."',
      },
      {
        type: "Notiz im Mülleimer",
        text: "Ein zerknüllter Kassenzettel aus einem Pfandleihhaus in einer anderen Stadt. Der Zettel ist schon älter.",
      },
      {
        type: "Einkaufszettel",
        text: 'Gefunden in Majds Jackentasche: "Snacks, Batterien, Briefmarken... wie viel ist Gold wert?" Der letzte Teil ist durchgestrichen.',
      },
      {
        type: "Tagebucheintrag",
        text: 'Ein Blatt, das aus Esthers Notizbuch gefallen sein muss: "Manchmal muss man die Dinge selbst in die Hand nehmen, wenn man will, dass etwas Spannendes passiert. Alle sind so langweilig hier."',
      },
      {
        type: "Gedicht",
        text: 'Auf einem Lesezeichen: "Goldener Glanz in stiller Nacht, von einem Geist davongebracht. Wo Spiele schlafen, kalt und alt, findet ihr ihn, habt ihr erst den Plan erkannt."',
      },
      {
        type: "Rätsel",
        text: 'Auf eine staubige Oberfläche geschrieben: "Ich habe keinen Mund, aber erzähle Geschichten von Gestern. Was bin ich?"',
      },
      {
        type: "Foto-Beschreibung (Esther)",
        text: "Auf Esthers Handy wurde ein Foto gefunden. Im Hintergrund ist undeutlich eine Gestalt mit einer Kapuze zu sehen, die sich am Kamin zu schaffen macht.",
      },
      {
        type: "Zeichnung (Mahmoud)",
        text: 'Eine grobe Skizze des Pokals auf einem Notizblock, daneben steht: "ca. 1,5 kg".',
      },
      {
        type: "Screenshot (Rami)",
        text: "Ein Screenshot beweist, dass das WLAN um 20:32 Uhr komplett ausgefallen ist.",
      },
      {
        type: "Foto-Beschreibung (Majd)",
        text: "Ein Foto vom Sternenhimmel (21:00 Uhr). Im Display spiegelt sich eine Banking-App mit sehr niedrigem Kontostand.",
      },
      {
        type: "Symbol an der Tür",
        text: "Ein kleines, mit Kreide an die Tür zum Stilleraum gemaltes Auge wurde entdeckt. Kaum zu sehen.",
      },
      {
        type: "Audio-Beschreibung (Majd)",
        text: 'Eine Sprachnachricht an einen Freund: "Du glaubst nicht, was die hier für einen Schatz rumstehen haben. Wenn man den einschmelzen würde... haha, nur Spaß... oder?"',
      },
      {
        type: "Audio-Beschreibung (Rami)",
        text: 'Eine wütende Sprachnachricht an einen Freund: (Wütendes Schnaufen) "Ich schwör\'s dir, ich schmeiß hier gleich was gegen die Wand! Nichts funktioniert!"',
      },
      {
        type: "Audio-Beschreibung (Esther)",
        text: 'Eine Sprachnachricht an eine Freundin: "Hier ist es so lahm. Ich wünschte, es gäbe mal ein richtiges Abenteuer... Man müsste es vielleicht selbst in die Hand nehmen."',
      },
      {
        type: "Audio-Beschreibung (Motaz)",
        text: 'Eine flüsternde Audio-Notiz namens "Idee": "Item 1: Der Pokal. Item 2: Das Gedicht. Item 3: Die falschen Spuren. Das wird das beste Spiel aller Zeiten..."',
      },
      {
        type: "Physisches Objekt",
        text: "Ein einzelner, billiger Plastik-Schachbauer liegt auf dem Kaminsims, wo der Pokal stand.",
      },
      {
        type: "Physisches Objekt",
        text: "In der Küche liegt ein Apfel mit einem einzigen, sauberen Biss darin. Niemand will ihn gegessen haben.",
      },
      {
        type: "Kombinations-Hinweis",
        text: 'Der Schlüssel zum "Stilleraum" fehlt am Schlüsselbrett. Er wurde in der Tasche von Mahmouds Jacke gefunden.',
      },
      {
        type: "Der finale Fundort",
        text: 'Hinweis aus dem Gedicht: "Wo Spiele schlafen"... Der Pokal muss in der Kiste mit den alten Brettspielen sein!',
      },
    ],
  },
  // =================================================================
  // ARABISCHE ÜBERSETZUNGEN (NEU & OPTIMIERT)
  // =================================================================
  ar: {
    // Globale Elemente & Buttons
    lang_btn_text: "DE",
    team_text: "فريق",
    logout_btn_text: "مغادرة الفريق",
    back_to_menu_btn: "→ العودة للقائمة",
    confirm_btn: "تأكيد",
    clue_modal_title: "دليل جديد!",
    clue_modal_button: "رائع!",

    // Login-Seite (index.html)
    login_page_title: "شفرة حياة - الانضمام لفريق",
    main_title: "شفرة حياة",
    enter_game_btn: "ابدأ المغامرة",
    join_group_title: "انضم إلى فريقك",
    group_select_placeholder: "-- اختر فريقك --",
    group_code_placeholder: "أدخل رمز الفريق",
    join_group_btn: "ابدأ اللعب",
    login_error_empty: "الرجاء اختيار فريق وإدخال الرمز.",
    login_error_wrong: "رمز الفريق غير صحيح. حاول مجدداً.",

    // Menü-Seite (menu.html)
    menu_page_title: "شفرة حياة - القائمة الرئيسية",
    menu_button_fall: "القضية",
    menu_button_verdaechtigte: "المشتبه بهم",
    menu_button_hinweise: "الأدلة",
    menu_button_aufgaben: "المهام",

    // Fall-Seite (fall.html)
    fall_page_title: "القضية - شفرة حياة",
    fall_title: "القضية الغامضة",
    fall_p1:
      "الكأس الذهبي قد اختفى! تمت سرقته بالأمس بين الساعة ٨:٠٠ و ٩:٣٠ مساءً من القاعة المشتركة. كان المكان يعج بالحياة، لكن لا أحد يدّعي أنه رأى شيئًا. لا يوجد شهود على السرقة نفسها، فقط سلسلة من الأحداث الغريبة والأشياء التي تُركت في مسرح الجريمة.",
    fall_mission_title: "مهمتكم",
    fall_mission_p1:
      "أنتم الآن فريق من المحققين الأذكياء. مهمتكم هي مواجهة تحديات السارق الغامض لإثبات جدارتكم. مع كل مهمة تنجزونها بنجاح، ستجمعون أدلة تقربكم من كشف هوية الجاني وداخله وطريقة تنفيذه للسرقة. الوقت يمر بسرعة، وحفل ختام المخيم الكبير على الأبواب!",
    fall_questions_title: "الأسئلة النهائية (في نهاية اللعبة)",
    fall_question1: "من هو السارق؟",
    fall_question2: "كيف تمت السرقة بالضبط؟ (اشرحوا تفاصيل الخطة)",

    // Verdächtigte-Seite (verdaechtigte.html)
    suspects_page_title: "المشتبه بهم - شفرة حياة",
    suspects_title: "قائمة المشتبه بهم",
    suspect_mahmoud_quote:
      '"كنت قاعد على الكنبة، حاطط سماعاتي وعم أسترخي. الناس كانت رايحة جاية، بس أنا ما كنت منتبه لشي. صراحة، أنا آخر واحد ممكن يكون شاف شي."',
    suspect_majd_quote:
      '"أغلب وقتي كنت برا، الإشارة أحسن. كنت عم أحكي مع أهلي. لما رجعت، حسيت الجو غريب ومتوتر. ما بعرف شو صار."',
    suspect_esther_quote:
      '"كنت معصبة كتير من رامي لأنه فات من جنبي بالمطبخ بسرعة وبدون أي انتباه. بعدها سمعت إنه الكأس انسرق. يمكن من عصبيته عملها وأخده معه."',
    suspect_rami_quote:
      '"إيه كنت معصب، لأن النت كان زبالة والألعاب عم تقطّع. نزلت على القبو لأروّق شوي. لما طلعت، كانت إستر عم تتصرف بغرابة معي. ما بعرف شبها. الكأس ما إلي علاقة فيه."',
    suspect_motaz_quote:
      '"كنت بغرفتي عم أقرأ. نزلت مرة وحدة بس لأشتري مي من الماكينة. وقتها كان كل شي طبيعي. بس مستغرب كيف الكأس بيختفي ومحمود كان قاعد جنبه كل الوقت."',

    // Hinweise-Seite (hinweise.html)
    clues_page_title: "الأدلة - شفرة حياة",
    clues_title: "الأدلة التي تم جمعها",
    no_clues_found:
      "لم يتم العثور على أدلة بعد. أنجزوا المهام لكشف المزيد من الأسرار!",

    // Aufgaben-Seite (aufgaben.html)
    tasks_page_title: "المهام - شفرة حياة",
    tasks_title: "خريطة المهام",
    task_code_placeholder: "الرمز",
    tasks_day_prefix: "اليوم",
    tasks_all_done_title: "🎉 عمل رائع أيها المحققون! 🎉",
    tasks_all_done_text:
      "لقد أنجزتم كل المهام وجمعتم كل الأدلة. توجهوا الآن إلى صفحة الأدلة لحل اللغز النهائي!",

    // Aufgaben (Titel und Beschreibungen klingen jetzt natürlicher)
    tasks: [
      {
        title: "غرفة على سنقة عشرة",
        description: "التقطوا صورة 'قبل وبعد' لغرفتكم وهي مرتبة بشكل مثالي.",
      },
      {
        title: "حفلة الـ 30 ثانية",
        description: "اختاروا أغنية وغنوها جميعاً بصوت واحد لمدة 30 ثانية.",
      },
      {
        title: "العقدة البشرية",
        description:
          "قفوا في دائرة، أمسكوا أيدي شخصين مختلفين بشكل متقاطع، ثم حاولوا فك العقدة دون ترك الأيدي حتى تعودوا إلى دائرة من جديد.",
      },
      {
        title: "تحدي الـ 10 تمريرات",
        description: "مرروا الكرة بينكم 10 مرات متتالية دون أن تلمس الأرض.",
      },
      {
        title: "الرسام الأعمى",
        description:
          "أحد أعضاء الفريق معصوب العينين يجب أن يرسم شكلاً بناءً على توجيهات باقي الفريق.",
      },
      {
        title: "جرافيتي المخيم",
        description:
          "باستخدام الطباشير، ارسموا لوحة فنية كبيرة وملونة عن موضوع 'ما هو صوت الصداقة؟'.",
      },
      {
        title: "باب الحارة: تمثال حي",
        description:
          "مثلوا مشهداً شهيراً من 'باب الحارة' لمدة دقيقة كاملة دون حراك.",
      },
      {
        title: "فلاش موب المخيم",
        description:
          "ابتكروا رقصة قصيرة (30 ثانية) على أغنية مشهورة وقوموا بأدائها معاً بشكل مفاجئ.",
      },
      {
        title: "ماندالا الطبيعة",
        description:
          "اصنعوا لوحة ماندالا فنية كبيرة على الأرض باستخدام مواد من الطبيعة فقط.",
      },
      {
        title: "أوركسترا المطبخ",
        description:
          "قدموا مقطوعة إيقاعية لمدة 30 ثانية باستخدام أدوات المطبخ فقط.",
      },
      {
        title: "جولف الفريسبي",
        description:
          "صوّبوا الفريسبي على 3 أهداف مختلفة بأقل عدد ممكن من الرميات.",
      },
      {
        title: "صيد الألوان",
        description:
          "ابحثوا في الطبيعة عن عناصر تمثل الألوان التالية وقدموها لإيراغون: أحمر، أصفر، أخضر، بني, وأبيض.",
      },
      {
        title: "اليرقة المتدحرجة",
        description:
          "اقطعوا مسافة 10 أمتار على شكل 'يرقة بشرية' عن طريق التدحرج على الأرض.",
      },
      {
        title: "تميمة الفريق",
        description:
          "اصنعوا تميمة صغيرة تمثل فريقكم، مستخدمين فقط مواد من الطبيعة تجدونها في المخيم.",
      },
      {
        title: "مسرح الظل: أسطورة المخيم",
        description: "اروون قصة قصيرة ومبتكرة على شكل مسرح للظل خلف قطعة قماش.",
      },
      {
        title: "مقابلة مع الفائز",
        description:
          "صوروا مقطع فيديو تقومون فيه 'باستجواب' المشتبه به الرئيسي في القضية.",
      },
      {
        title: "سباق السقايين",
        description:
          "على كل عضو في الفريق أن يركض مسافة قصيرة حاملاً كوباً مملوءاً بالماء حتى حافته، ثم يسكب ما تبقى في دلو. ستحصلون على الرمز عند وصول الماء لعلامة معينة.",
      },
      {
        title: "حكاية سمر",
        description:
          "اخترعوا معاً قصة قصيرة (دقيقة واحدة) مضحكة أو مرعبة عن المخيم. على كل عضو أن يشارك بجملة واحدة على الأقل.",
      },
      {
        title: "صرخة المحققين",
        description:
          "ألّفوا هتافاً أو صيحة حرب قصيرة وقوية لفريقكم تظهر عزيمتكم في حل القضية. اصرخوها معاً بقوة وحماس.",
      },
      {
        title: "السيناريو الأخير",
        description:
          "اكتبوا خطة قصيرة وموجزة لعرضكم النهائي الذي ستعيدون فيه تمثيل عملية السرقة.",
      },
    ],

    // Hinweise (Texte klingen jetzt geheimnisvoller auf Arabisch)
    clues: [
      {
        type: "قصاصة ورق",
        text: '"أفضل مكان لإخفاء شيء ما... هو أن تضعه أمام أعين الجميع."',
      },
      {
        type: "رسالة نصية إلى رامي",
        text: '"روّق يا رجل. كلها لعبة. لا تعمل شي تندم عليه من ورا عصبيتك."',
      },
      {
        type: "ورقة في القمامة",
        text: "إيصال ممزق من محل رهن في مدينة أخرى. الإيصال يبدو قديماً.",
      },
      {
        type: "قائمة مشتريات",
        text: 'وجدت في جيب ماجد: "بطاريات، سناكات، طوابع بريدية... كم يسوى الذهب؟" الجملة الأخيرة مشطوب عليها.',
      },
      {
        type: "صفحة من مذكرات",
        text: 'ورقة يبدو أنها سقطت من دفتر إستر: "أحياناً، عليك أن تأخذ زمام المبادرة بنفسك إذا أردت أن يحدث شيء مثير. الجميع هنا ممل جداً."',
      },
      {
        type: "قصيدة غامضة",
        text: 'على فاصل كتاب: "بريق الذهب في جوف الليل الساكن، اختطفه طيف عابر. حيث تنام الألعاب في صمتها البارد، هناك ستجدونه... إن فككتم شفرة الخطة."',
      },
      {
        type: "لغز على الغبار",
        text: 'مكتوب على سطح مغبر: "ليس لي فم، لكني أروي حكايات الأمس. فمن أنا؟"',
      },
      {
        type: "صورة في هاتف إستر",
        text: "في هاتف إستر، توجد صورة يظهر في خلفيتها خيال غير واضح لشخص يرتدي قبعة، يعبث بالقرب من المدفأة.",
      },
      {
        type: "رسمة لمحمود",
        text: 'رسمة بسيطة للكأس على دفتر ملاحظات، وبجانبها ملاحظة: "الوزن تقريباً: 1.5 كغ".',
      },
      {
        type: "لقطة شاشة من رامي",
        text: "لقطة شاشة تثبت أن شبكة الواي فاي انقطعت تماماً الساعة ٨:٣٢ مساءً.",
      },
      {
        type: "صورة في هاتف ماجد",
        text: "صورة لسماء الليل (٩:٠٠ مساءً). ينعكس في شاشة الهاتف تطبيق بنكي يظهر رصيداً منخفضاً جداً.",
      },
      {
        type: "رمز على الباب",
        text: "تم اكتشاف رمز صغير لعين مرسومة بالطبشور على باب الغرفة الهادئة. بالكاد يمكن رؤيتها.",
      },
      {
        type: "رسالة صوتية من ماجد",
        text: 'رسالة صوتية لصديق: "ما رح تصدق الكنز اللي حاطينه هون. لو الواحد يذوّبه... ههه، عم أمزح... أو يمكن لأ؟"',
      },
      {
        type: "رسالة صوتية من رامي",
        text: 'رسالة صوتية غاضبة لصديق: (صوت أنفاس غاضبة) "قسماً بالله رح أكسر شي بهالحيط! ولا شي شغال!"',
      },
      {
        type: "رسالة صوتية من إستر",
        text: 'رسالة صوتية لصديقة: "المكان هون كتير ممل. يا ريت لو يصير في مغامرة حقيقية... يمكن لازم الواحد يصنعها بنفسه."',
      },
      {
        type: "مذكرة صوتية لمعتز",
        text: 'مذكرة صوتية يهمس فيها باسم "فكرة": "العنصر الأول: الكأس. العنصر الثاني: القصيدة. العنصر الثالث: الأدلة المضللة. ستكون هذه أفضل لعبة على الإطلاق..."',
      },
      {
        type: "دليل مادي",
        text: "تم العثور على بيدق شطرنج بلاستيكي وحيد على رف المدفأة، حيث كان الكأس موضوعاً.",
      },
      {
        type: "دليل مادي",
        text: "في المطبخ، توجد تفاحة عليها آثار قضمة واحدة نظيفة. لا أحد يعترف بأكلها.",
      },
      {
        type: "دليل مركب",
        text: 'مفتاح "الغرفة الهادئة" مفقود من لوحة المفاتيح. تم العثور عليه لاحقاً في جيب سترة محمود.',
      },
      {
        type: "المخبأ الأخير",
        text: 'تلميح من القصيدة: "حيث تنام الألعاب"... لا بد أن الكأس مخبأ في صندوق ألعاب الطاولة القديم!',
      },
    ],
  },
};
