import React from 'react'
import { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({addTask}) => {

  const [title, setTitle] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(title) 
    }

    const handleChange = (e) =>{
        const newTitleTask = e.target.value;
        setTitle(newTitleTask) 
       

    }
    
  return (
    <form className='content-add-task' onSubmit={handleSubmit} >
        <input 
            type='text' 
            placeholder='Ingrese nueva tarea' 
            onChange={handleChange} 
            name="title"       
        />
        <button className='btn-add'>Add</button>
    </form>
    
  )
    
}

export default TaskForm