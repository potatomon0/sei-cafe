import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import React, { useState } from 'react';
import styles from './AuthPage.module.css'


export default function AuthPage({user,setUser}) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <main className={styles.AuthPage}>
      <h1>Auth Page</h1>
      {showLogin ? <LoginForm setUser={setUser}/> :
        <SignUpForm setUser={setUser}/>}
      <button onClick={()=>{
        setShowLogin(!showLogin)
      }}>{showLogin ? 'Sign Up':'Login'}</button>
    </main>
  )
}