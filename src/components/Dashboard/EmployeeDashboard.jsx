import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    
      <div className='p-20  bg-[#1C1C1C] h-screen' >
        
        <Header/>
        <TaskListNum/>
        <TaskList/>
      </div>
    
  )
}

export default EmployeeDashboard
