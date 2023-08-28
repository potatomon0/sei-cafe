import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import React, { useState } from 'react';


export default function AuthPage() {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  return (
    <main>
      <h1>Auth Page</h1>
      {isLoggingIn ? <LoginForm /> :
        <SignUpForm />}
      <button onClick={()=>{
        setIsLoggingIn(!isLoggingIn)
      }}>{isLoggingIn ? 'Would you like to signup?':'Already had an account?'}</button>
    </main>
  )
}