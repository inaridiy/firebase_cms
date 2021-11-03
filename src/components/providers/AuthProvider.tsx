import { createContext, useEffect, useState } from 'react';
import { needChild } from '../../types/needChild';
import { auth, loginByGoogle, loginByPassword } from '../../firebase/auth';
import { User, onAuthStateChanged, UserCredential } from '@firebase/auth';

export const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  loginByPassword: (email: string, password: string) => Promise<UserCredential>;
  loginByGoogle: () => Promise<void>;
}>({
  user: null,
  loading: true,
  loginByGoogle,
  loginByPassword,
});

export const AuthProvider: React.FC<needChild> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(
    auth,
    (userData) => {
      setLoading(false);
      setUser(userData);
      console.log(userData);
    },
    console.error
  );
  //console.log(user, loading);

  return (
    <AuthContext.Provider
      value={{ loading, user, loginByGoogle, loginByPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
