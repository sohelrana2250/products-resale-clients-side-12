import React, { createContext, useEffect, useState } from 'react';
import { getAuth, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext();

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [advertisement, setAdvertisement] = useState(false);




    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);


    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);


        })

        return () => { return unsubscribe() }


    }, [])

    const GoogleSingIn = () => {

        return signInWithPopup(auth, GoogleProvider);
    }

    const profileUpdate = (profile) => {
        setLoading(true);

        return updateProfile(auth.currentUser, profile);
    }

    const LogOut = () => {

        return signOut(auth);
    }





    const authInfo = { user, advertisement, GoogleSingIn, setAdvertisement, loading, createUser, Login, profileUpdate, LogOut };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;