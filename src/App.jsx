import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from "./utilities/users-service";
import AuthPage from './pages/AuthPage/AuthPage'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar'
import LoginForm from './components/LoginForm/LoginForm'


function App() {
  const [user, setUser] = useState(getUser())//array destructuring useState hook, the first one is a state variable and the second one is setState method
  //every time the page load it check the user state, it will return either a payload or null
  return (
    <main className="App">

      {/* ternary conditional rendering: if user not null aka has data, render <Routes> : falsy render <AuthPage> */}
      {user ?
        <>
        <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </> : <AuthPage setUser={setUser} user={user}/>}
    </main>
  );
}

export default App;
