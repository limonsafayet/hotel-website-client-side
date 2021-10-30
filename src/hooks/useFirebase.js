import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../utilities/firebase.init";
import Swal from 'sweetalert2'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            })
            .finally(() => setIsLoading(false));
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            })
            .finally(() => setIsLoading(false));
    }

    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setUserName(name)
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            })
            .finally(() => setIsLoading(false));
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
        setUser(prev => ({
            ...prev,
            displayName: name
        }))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        processLogin,
        registerNewUser,
        logOut
    }
}

export default useFirebase;