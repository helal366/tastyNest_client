import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
    const [user, setUser]=useState(null)
    const userRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdate=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    const userLogout=()=>{
        return signOut(auth)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo={
        user,
        setUser,
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