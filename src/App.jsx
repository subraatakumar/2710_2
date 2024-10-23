import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Store</h1>

      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/signin">Login</Link>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

    </>
  )
}

export default App
