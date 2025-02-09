import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export  const AuthContext = createContext();
 const auth = getAuth(app);
 
 const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading , setLoading] = useState(true)
     const googleProvider = new GoogleAuthProvider();
     const axiosPublic = useAxiosPublic()
     
     
     useEffect(() =>{
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser)
             console.log('current user', currentUser);
             
             if(currentUser){
                 const userInfo = {
                    email : currentUser.email
                 }
                    axiosPublic.post(`/jwt`,userInfo)
                    .then(res => {
                         if(res.data.token){
                            localStorage.setItem('access-token' , res.data.token)
                         }
                         
                    })
             }else{
                        localStorage.removeItem('access-token')
             }

             setLoading(false)
                  
          });
          return () => {
             return unsubscribe()
          }
     } , [axiosPublic])

     const creatUser =  (email,password) => {
         return createUserWithEmailAndPassword(auth,email,password)
     }

     const logIn = (email,password) => {
         setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
     }

     const googleLogIn = ()=> {
         setLoading(true)
         return signInWithPopup(auth, googleProvider)
     }

     const logOut = () => {
         return signOut(auth)
     }

     const updateUserProfile = (name,photourl ) => {
        return updateProfile(auth.currentUser , {
                    displayName : name , photoURL : photourl
        })
     }


    const authInfo = {
        user, 
        loading,
        creatUser,
        logIn,
        logOut,
        updateUserProfile,
        googleLogIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;