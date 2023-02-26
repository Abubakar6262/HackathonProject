import React, { createContext,useEffect,useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';
export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [authentication,setAuthentication] = useState(false)
    const[user,setUser]=useState({});

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              setAuthentication(true);
            } else {
              // User is signed out
            }
          });
    },[])

    return (
        <AuthContext.Provider value={{authentication,setAuthentication,user}}>
            {props.children}
        </AuthContext.Provider>
    )
}
