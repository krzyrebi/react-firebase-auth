import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, updateEmail } from "firebase/auth";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logout = () => {
        return signOut(auth);
    };

    const resetPassword = (email) => {
        // return sendPasswordResetEmail(auth, email)
    };

    const updateUserEmail = (email) => {
        return updateEmail(currentUser, email);
    };

    const updateUserPassword = (password) => {
        return updatePassword(currentUser, password);
    };


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
