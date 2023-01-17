// import { auth, db } from "./firebase/init";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";
import React from "react";

function App() {
  const [user, setUser] = React.useState({});

  // function createPost() {
  //   const post = {
  //     title: "land a JOb",
  //     description: "Finish ffs",
  //   };
  //   addDoc(collection(db, "posts"), post);
  // }
  function register() {
    createUserWithEmailAndPassword(auth, "123@129.com", "00r012d")
      .then(({user}) => {
        // Signed in
        
        console.log(user);
        setUser(user)
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function login() {
    signInWithEmailAndPassword(auth, "123@129.com", "00r012d")
      .then((user) => {
        // Signed in
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function logout() {
    signOut(auth);
    setUser({})
  }

  return (
    <div className="App">
      <button onClick={register}>register</button>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
      {user.email}
    </div>
  );
}

export default App;
