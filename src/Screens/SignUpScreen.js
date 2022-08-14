import React from "react";
import { useRef } from "react";
import "./SignUPScreen.css";
import { auth } from "../Firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })

    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>sign In</h1>

        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign in
        </button>

        <h4>
          <span className="signupScreen_gray">New to Netflix?</span>
          <span className="signupScreen_link" onClick={register}> Sign Up Now </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
