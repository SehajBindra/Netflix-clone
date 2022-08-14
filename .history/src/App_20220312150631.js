import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./Firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
   
      if (userAuth) {
        // logged in
        console.log(userAuth);
      } else{
        // logged out
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
