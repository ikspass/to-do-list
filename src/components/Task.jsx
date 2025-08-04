import React from 'react'

const Task = ({title, description, date, status, isActive, onClick}) => {
  return (
    <div className={`task-container ${isActive ? 'active' : ''}`} onClick={onClick}>
      <p className='heading-text'>{title}</p>
      <p className='normal-text'>{description}</p>
      <p className='normal-text'>{date}</p>
      {status &&
        <p className='normal-text green-text'>Выполнено</p>
      }
    </div>
  )
}

export default Task;