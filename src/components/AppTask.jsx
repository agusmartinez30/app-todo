
import React, {  useState } from 'react';
import './AppTask.css'

//components
import ListTask from './ListTask'
import TaskForm from './TaskForm'
import task from '../sample/Task.json'

const AppTask = () => {

  const [tarea, setTarea] = useState(task)

  const addTask = (title) =>{
    console.log(title);
    
    const newTask = {
      title: title,
      id: tarea.length
    }

    setTarea(
      [...tarea, newTask]
    )
  }

  const deleteTask = (id) =>{
    const delTarea = tarea.filter( task => task.id != id)
    setTarea(delTarea)
  }
  return (
    <div className='container-app-task'>
        <TaskForm addTask={addTask}/>
        <ListTask tarea={tarea} deleteTask={deleteTask}/>
    </div>
  )
}

export default AppTask