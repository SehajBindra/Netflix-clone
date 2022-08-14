import React from "react";
import { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src=  "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">Sign in</button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
          {signIn ? (
              <SignUpScreen />
          ) : (
            <>
            <h2>Unlimted Movies , Tv Programs and  Much more</h2>
            <h2>Watch anywhere Cancel at any Time</h2>
  
            <h3>
              Ready to Watch? Enter your Enail to create or restart your
              Membership{" "}
            </h3>
  
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
              </form>
             
            </div>
          </>
          
          )}
        
      </div>
    </div>
  );
}

export default LoginScreen;
