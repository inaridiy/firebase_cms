import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

import { firebaseApp } from './firebase';

export const auth = getAuth(firebaseApp);

export const loginByGoogle = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const loginByPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (): Promise<void> => {
  return signOut(auth);
};
