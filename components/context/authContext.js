import { createContext, useEffect, useState } from "react";
import { useContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../../firebase'

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('There is no auth provider')
    }
    return context;
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    
    const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);
    
    const logout = () => signOut(auth);

    const loginGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, GoogleProvider);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[])

    return (
        <authContext.Provider value={{signup, login, user, logout, loading, loginGoogle}}>
            {children}
        </authContext.Provider>
    )
}