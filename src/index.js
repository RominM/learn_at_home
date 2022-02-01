import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import './reset.css'

ReactDOM.render(
 <React.StrictMode>
  <Router>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  </Router>
 </React.StrictMode>,
 document.getElementById('root')
)
