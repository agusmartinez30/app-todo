import React from 'react'
import { useState } from 'react'
import './Task.css'


const Task = ({tarea, deleteTask}) => {

  const [check, setCheck] = useState(false)

  console.log(check);

  

  const handleChange = () =>{
    setCheck(!check)
  

    if(check){
      console.log('Task incomplete');
    }else{
      console.log('Task complete');
    }

  }
  
   
  return (
    <div className='task-content' >
       
        {
            tarea.map( e => 
            <section className='task'  key={e.id}>

              <div className='task-title'>
                <h3> {e.title} </h3> 
                <h2>{e.done}</h2>
                {/* <h3> {e.id} </h3>  */}
              </div>

              <article className='container-task-btn'>
                <div className='task-state'>
                  <input type="checkbox" onChange={handleChange} />  
                </div>
                 
                <div className='task-delete'>
                    <button onClick={deleteTask.bind(this, e.id)}
                    >X</button>
                </div>
              </article>
            </section>)  
        }
    </div>
  )
}

export default Task