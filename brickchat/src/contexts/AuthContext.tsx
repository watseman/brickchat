import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

type AuthContextType = {
    currentUser: User | null;
    signup: Function;
    login: Function;
    logout: Function;
    signinwithgoogle: Function;
  };

// Create the AuthContext with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const provider = new GoogleAuthProvider();

// Define the props for AuthProvider
type AuthProviderProps = {
  children: React.ReactNode; // You need to specify children as a prop
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}



export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  function signup(email:string, password:string){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async function signinwithgoogle(){
    signInWithPopup(auth, provider)

  }

  function login(email: string, password:string){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout(){
    signOut(auth).then((e) => {
      console.log("signed out success")
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })

    return unsubscribe
  },[])
 
  const value = {
    currentUser,
    signup,
    login,
    logout,
    signinwithgoogle
    }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
