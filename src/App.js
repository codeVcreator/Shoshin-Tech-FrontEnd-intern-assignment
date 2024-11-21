import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Sidebar />
    </div>
  );
};

export default App