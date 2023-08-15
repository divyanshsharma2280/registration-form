import React from 'react'
import "./App.css"
import Register from './pages/Register'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/Login' element={<Login />} />
            </Routes>       
        </div>
    </BrowserRouter>

  )
}
