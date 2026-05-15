// Traccia i click sul download in Firestore (collezione "downloads").
// La dashboard locale aggrega il conteggio.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function versionFromHref(href) {
  const m = (href || "").match(/[?&]v=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : "unknown";
}

let logged = false; // evita doppio log su doppio click rapido
function track(href) {
  if (logged) return;
  logged = true;
  setTimeout(() => { logged = false; }, 3000);
  try {
    addDoc(collection(db, "downloads"), {
      version: versionFromHref(href),
      createdAt: serverTimestamp(),
      ua: navigator.userAgent,
      ref: location.pathname
    }).catch(() => {});
  } catch (e) {}
}

document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href*="all-in-one-launcher-setup.exe"]');
  if (a) track(a.getAttribute("href"));
}, true);
