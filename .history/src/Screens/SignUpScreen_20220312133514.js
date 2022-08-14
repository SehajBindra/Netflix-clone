import React from 'react'
import "./SignUPScreen.css";

function SignUpScreen() {

   const register = (e) => {
     e.preventDefault();
   }

   const signIn = (e) => {
     e.preventDefault();
   };

  return (
    <div className='signupScreen'>
      <form>
      <h1>
        sign in</h1>
        
        <input type="Email" placeholder='Email' />
        <input type="passwprd" placeholder='Password' />


        <h4>
         <span className='signupScreen_gray'>New to Netflix?</span>  
          <span className='signupScreen_link' onClick={reg}> Sign Up Now </span> 
         
         </h4>
        </form>
        </div>
  )
}

export default SignUpScreen