// libs/firebase/config.ts

import { getAuth } from 'firebase/auth';

import { getFirestore, doc, getDoc } from "firebase/firestore";

import { initializeApp, getApps } from 'firebase/app';

// Load .env variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const getSavedRecipes = async (userId: string) => {
  const docRef = doc(db, 'savedRecipes', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data()?.savedRecipes || [];
  } else {
    console.log('No liked recipes found');
    return [];
  }
};
