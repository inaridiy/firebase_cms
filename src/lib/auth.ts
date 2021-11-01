import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

import { firebaseApp } from './firebase';

export const loginByGoogle = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);
  return signInWithRedirect(auth, provider);
};

export const loginByPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  const auth = getAuth(firebaseApp);
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(firebaseApp);
  return signOut(auth);
};
