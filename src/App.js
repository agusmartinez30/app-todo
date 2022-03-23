import React from 'react'
import './App.css'
import AppTask from './components/AppTask'



const App = () => {
  return (
    <div className='app-header'>
      <h2>Lista de tareas</h2>
      <AppTask />
    </div>
  )
}

export default App