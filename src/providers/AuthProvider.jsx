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
    const userProfileUpdate = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: image,
        });
    }

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth , async currentUser => {
            
            const email = currentUser?.email;
            console.log(currentUser);
            setUser(currentUser);
            if(currentUser?.email){
                // console.log("inside auth", email);
                // Create JWT 
                await axios.post('/jwt', {email: currentUser?.email});
                // // Find a new user / admin
                // const getUser = await axios.get(`/user/${currentUser?.email}?request=user`);
                // if(getUser.data?.success){
                //     setUser(getUser.data?.user);
                //     setLoading(false)
                // }
             
            }else{
                await axios.post('/logout-user', {email:currentUser?.email});
                setUser({});
                console.log('Logout');
            }
            setLoading(false)
            console.log('slow falas');
          
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