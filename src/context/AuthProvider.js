import React, { createContext, useEffect, useState } from 'react';
import { getAuth, updateProfile, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);


    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);


        })

        return () => { return unsubscribe() }


    }, [])

    const profileUpdate = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const LogOut = () => {

        return signOut(auth);
    }



    const authInfo = { user, createUser, Login, profileUpdate, LogOut };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;