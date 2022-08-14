import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
   
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email, 
        })
        );
        console.log(userAuth);
      } else{
        // logged out
        dispatch(logout)
      }

    });

    return unsubscribe;
    
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ) : (
        <Switch>
          <Route path ="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
