import React from 'react'
import Login from './components/Auth/Login'; // Adjust path if needed
import './App.css';

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard';



const App = () => {
  return (
    <div className='bg-black'>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </div>
  )
}

export default App
