import React from 'react'
import Button from './UI/Button/Button';
import { doneTask, unDoneTask } from '../utils/Tasks'

const Task = ({task, isActive, onClick, update}) => {
  const handleDoneButtonClick = () => {
    if(!task.status){
      doneTask(task.id);
    }
    else{
      unDoneTask(task.id);
    }
    update();
  }

  return (
    <div className={`task-container ${isActive ? 'active' : ''}`} onClick={onClick}>
      <p className='heading-text'>{task.name}</p>
      {isActive && task.description &&
        <p className='normal-text'>{task.description}</p>
      }
      <p className='normal-text'>{task.date}</p>
      {task.status &&
        <p className='normal-text green-text'>Выполнено</p>
      }
      {isActive &&
        <Button onClick={handleDoneButtonClick}>{task.status ? 'Не выполнено' : 'Выполнено'}</Button>
      }
    </div>
  )
}

export default Task;