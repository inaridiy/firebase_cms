import { createContext, useState } from 'react';
import { needChild } from '../../types/needChild';
import { auth, loginByGoogle, loginByPassword } from '../../firebase/auth';
import { User, onAuthStateChanged, UserCredential } from '@firebase/auth';

export const AuthContext = createContext<{
  user: User | null;
  loginByPassword: (email: string, password: string) => Promise<UserCredential>;
  loginByGoogle: () => Promise<void>;
}>({
  user: null,
  loginByGoogle,
  loginByPassword,
});

export const AuthProvider: React.FC<needChild> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  return (
    <AuthContext.Provider value={{ user, loginByGoogle, loginByPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
