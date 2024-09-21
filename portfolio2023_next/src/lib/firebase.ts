import {
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  type FirebaseOptions,
  type FirebaseServerAppSettings,
} from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const clientConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const serverConfig: FirebaseServerAppSettings = {};

const clientApp = !getApps().some(({ name }) => name === "clientApp")
  ? initializeApp(clientConfig, "clientApp")
  : getApp("clientApp");
const serverApp = !getApps().some(({ name }) => name === "serverApp")
  ? initializeServerApp({ ...clientConfig, name: "serverApp" }, serverConfig)
  : getApp("serverApp");

const firebaseApp = typeof window === "undefined" ? serverApp : clientApp;
export const firebaseDB = getDatabase(firebaseApp);
export const firebaseRef = ref;
export const firebaseGet = get;

export default firebaseApp;
