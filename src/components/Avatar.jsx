import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Avatar.css'

const Avatar = ({img, name, job}) => {

  const [active, setActive] = useState(true)

  const handleClick = (e) =>{
    e.preventDefault()
    setActive(!active)
  }

  if(active){
    return (
      <div className='avatar-content'>
        <img src={img} />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <button onClick={handleClick} >
          Desactivar
        </button>
      </div>
  )
  }else{
    return(
      <div className='avatar-content'>
        <h2>No hay elementos</h2>
        <button onClick={handleClick} >
          Activar
        </button>
      </div>
    )
  }
  
}


export default Avatar