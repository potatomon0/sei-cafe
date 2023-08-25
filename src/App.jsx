import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState(null)//array destructuring useState hook, the first one is a state variable and the second one is setState method
  return (
    <main className="App">

      {/* ternary conditional rendering: if user not null aka has data, render <Routes> : falsy render <AuthPage> */}
      {user ?
        <>
          <Routes>
            <NavBar />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </> : <AuthPage />}
    </main>
  );
}

export default App;
