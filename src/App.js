import React, { useState } from 'react'
import './App.css';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from './Pages/Dashboard';

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen) 
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Dashboard />
      <Sidebar isOpen={sideBarOpen} />
    </div>
  );
};

export default App