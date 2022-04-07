import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import firebase from "firebase/auth";
import { auth } from "../firebase";

export const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
