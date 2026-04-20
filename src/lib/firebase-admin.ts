import { initializeApp, getApps, cert, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getAuth, type Auth } from "firebase-admin/auth";

let adminApp: App;

function initAdmin() {
  if (getApps().length) {
    adminApp = getApps()[0] as App;
    return;
  }
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!privateKey || !process.env.FIREBASE_ADMIN_CLIENT_EMAIL || !process.env.FIREBASE_ADMIN_PROJECT_ID) {
    throw new Error("Firebase Admin env vars ausentes");
  }
  adminApp = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey
    })
  });
}

export function adminDb(): Firestore {
  initAdmin();
  return getFirestore(adminApp);
}

export function adminAuth(): Auth {
  initAdmin();
  return getAuth(adminApp);
}
