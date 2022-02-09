import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Backup from "./pages/backup/Backup";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "./style/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/backup" element={<Backup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
