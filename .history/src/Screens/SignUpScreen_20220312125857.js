import React from 'react'
import "./SignUPScreen.css";

function SignUpScreen() {
  return (
    <div className='signupScreen'>
      <h1>
        sign in</h1>
        
        <input type="Email" placeholder='Email' />
        <input type="passwprd" placeholder='Password' />
        <button type='submit'>Sign in</button>
        </div>
  )
}

export default SignUpScreen