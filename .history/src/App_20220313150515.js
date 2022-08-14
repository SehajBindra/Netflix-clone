import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/counter/userSlice";

function App() {
  const user = null;
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
