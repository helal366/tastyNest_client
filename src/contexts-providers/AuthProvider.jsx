import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider();
    const [user, setUser]=useState(null)
    const userRegister=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdate=(updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }
    const userLogout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo={
        user,
        setUser,
        loading,
        setLoading,
        userRegister,
        userLogin,
        userUpdate,
        userLogout,
        googleLogin,
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;