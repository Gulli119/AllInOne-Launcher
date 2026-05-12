# ALL IN ONE UI — Sito vetrina

Sito statico per launcher media multipiattaforma. Hosted su GitHub Pages.

## Struttura

```
docs/
├── index.html           Home cinematic
├── caratteristiche.html Specifiche + form feedback (Firestore)
├── temi.html            Galleria temi
├── download.html        Download .exe da GitHub Releases
└── firebase-config.js   Config Firebase (pubblica, sicurezza in Firestore Rules)
```

## Setup

- Firebase: vedi `SETUP-FIREBASE.md`
- Launcher (app desktop): vedi `guida.md`

## Stack

- HTML statico + Tailwind CDN (no build)
- Firestore per feedback utenti
- GitHub Releases per distribuzione .exe
- GitHub Pages per hosting
