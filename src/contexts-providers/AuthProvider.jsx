import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
    const [loading, setLoading]=useState(true);
    const [user, setUser]=useState(null);
    const [allRecipes, setAllRecipes]=useState([]);
    const [selectedCuisine, setSelectedCuisine]=useState('All')
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

        fetch(`https://server-tasty-nest.vercel.app/recipes`)
        .then(res=>res.json())
        .then(data=>{
            setAllRecipes(data)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo={
        user,
        setUser,
        loading,
        setLoading,
        allRecipes,
        setAllRecipes,
        selectedCuisine,
        setSelectedCuisine,
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