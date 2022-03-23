import React from 'react'
import Task from './Task';
import './ListTask.css'


const ListTask = ( {tarea, deleteTask} ) => {

  return (
    <div className='content-list-task'>
       <Task tarea={tarea} deleteTask={deleteTask}/>        
    </div>
  )
}

export default ListTask