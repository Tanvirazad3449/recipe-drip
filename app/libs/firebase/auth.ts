import {
    type User,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from 'firebase/auth';
  
  import { auth } from './config';
  
  export function onAuthStateChanged(callback: (authUser: User | null) => void) {
    return _onAuthStateChanged(auth, callback);
  }
  
  export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account'});

    try {
      const result = await signInWithPopup(auth, provider);
  
      if (!result || !result.user) {
        throw new Error('Google sign in failed');
      }
      return result.user.uid;
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  }
  
  export async function signUpWithEmail(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error('Error signing up with email and password', error);
      throw error;
    }
  }

  export async function signInWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error('Error signing in with email and password', error);
      throw error;
    }
  }

  export async function signOutWithGoogle() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out with Google', error);
    }
  }

