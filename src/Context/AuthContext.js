import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preLoading, setPreLoading] = useState(true);
  const [duser, setdUser] = useState();
  const [classroom, setClass] = useState([]);

  const demoUser = {
    displayName: "Demo User",
    email: "demouser@gmail",
    uid: "123456",
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,
      currentUser => {
        setUser(currentUser);
        setLoading(false);
      })
    return () => unSubscribe();
  }, [])


  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  }

  const verify = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const googlePopUp = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  const passReset = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }


  useEffect(() => {
    fetch(`https://on-trackz-backend.vercel.app/user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setdUser(data.data)
      })
  }, [user?.email])

  useEffect(() => {
    fetch(`https://on-trackz-backend.vercel.app/classroom/${user ? user?.email : demoUser?.email}`)
      .then(res => res.json())
      .then(data => setClass(data.data))
  }, [demoUser?.email, user])

  const value = {
    createUser, updateUser, verify, user, logIn, googlePopUp, logOut, loading, preLoading, passReset, demoUser, duser, classroom
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(UserContext);
  return context;
}

export default AuthContext;