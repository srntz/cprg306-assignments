"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "@firebase/auth";
import { auth } from "./firebase";

interface IAuthContext {
  user: User | null;
  githubSignIn: () => void;
  firebaseSignOut: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function githubSignIn() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function firebaseSignOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, githubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): IAuthContext {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  } else {
    throw new Error("Auth context is undefined");
  }
}
