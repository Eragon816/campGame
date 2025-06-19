// firebase-init.js

// Import der benötigten Firebase-Funktionen von den CDN-Modulen
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Dein Web-App's Firebase Konfiguration (von dir bereitgestellt)
const firebaseConfig = {
  apiKey: "AIzaSyAg83wEt1zUenPkxAE0uZcgP1R8DNlC89o",
  authDomain: "hayat-code-spiel.firebaseapp.com",
  databaseURL:
    "https://hayat-code-spiel-default-rtdb.europe-west1.firebasedatabase.app", // Wichtig: Diese URL explizit hinzufügen!
  projectId: "hayat-code-spiel",
  storageBucket: "hayat-code-spiel.appspot.com",
  messagingSenderId: "48671966778",
  appId: "1:48671966778:web:b0b669f543ee7b1c539703",
  measurementId: "G-YE0P9WL3EG",
};

// Firebase App initialisieren
const app = initializeApp(firebaseConfig);

// Referenz zur Realtime Database holen und exportieren, damit andere Skripte sie verwenden können
const db = getDatabase(app);

export { db };
