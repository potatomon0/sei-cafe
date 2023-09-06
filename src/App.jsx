import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.module.css';
import { getUser } from "./utilities/users-service";
import AuthPage from './pages/AuthPage/AuthPage'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar'
import styles from './App.module.css'

function App() {
  const [user, setUser] = useState(getUser())//array destructuring useState hook, the first one is a state variable and the second one is setState method
  //every time the page load it check the user state, it will return either a payload or null
  return (
    <main className={styles.App}>

      {/* ternary conditional rendering: if user not null aka has data, render <Routes> : falsy render <AuthPage> */}
      {user ?
        <>
        <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage setUser={setUser} user={user}/>} />
            <Route path="/orders" element={<OrderHistoryPage setUser={setUser} user={user}/>} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </> : <AuthPage setUser={setUser} user={user}/>}
    </main>
  );
}

export default App;
