import React from 'react'
import "./SignUPScreen.css";

function SignUpScreen() {
  return (
    <div className='signupScreen'>
      <form>
      <h1>
        sign in</h1>
        
        <input type="Email" placeholder='Email' />
        <input type="passwprd" placeholder='Password' />
        <button type='submit'>Sign in</button>
        </form>
        </div>
  )
}

export default SignUpScreen