import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).finally(() => {
                setIsLoading(false)
            })

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).finally(() => setIsLoading(false))
    }

    return {
        user,
        googleSignIn,
        logOut,
        isLoading
    }

}

export default useFirebase;