import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../services/firebase";

const googleProvide = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const axios = useAxios();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvide)
    }

    // Github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // LogOut user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // login user
    const userProfileUpdate = (object) => {
        const { name,profile} = object;
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: profile,
        });
    }

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth , async currentUser => {
            
            console.log(currentUser);
            setUser(currentUser);
            if(currentUser?.email){
                // Create JWT 
                await axios.post('/jwt', {email: currentUser?.email});
                
            }else{
                await axios.post('/logout-user', {email:currentUser?.email});
                setUser({});
                console.log('Logout');
            }
            setLoading(false)
          
        })
        return () => {onSubscribe()}
    },[axios])

    const userInfo = {
        user, 
        createUser,
        loginUser,
        userProfileUpdate,
        loading,
        logOut,
        googleLogin,
        githubLogin
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;