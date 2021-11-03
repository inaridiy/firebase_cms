import { onAuthStateChanged, User } from '@firebase/auth';
import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { auth } from '../firebase/auth';

const userDataState = atom<User | null>({
  key: 'userDataState',
  default: null,
  dangerouslyAllowMutability: true,
});

export const useAuth = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [ready, setReady] = useState(false);

  let resolve: (user: User | null) => void = () => {};

  const waitForAuth = () =>
    new Promise<User | null>((res) => {
      if (ready) {
        res(userData);
      } else if (process.browser) {
        resolve = res;
      } else {
        res(null);
      }
    });

  if (process.browser) {
    onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setReady(true);
      resolve(user);
    });
  }

  return { userData, ready, waitForAuth };
};
