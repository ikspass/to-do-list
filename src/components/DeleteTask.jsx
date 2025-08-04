import React, { useState, useEffect } from 'react'
import { deleteTask } from '../utils/Tasks'
import Button from './UI/Button/Button'

const DeleteTask = ({task, onClose}) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if(task){
      setName(task.name);
      setDescription(task.description);
      setDate(task.date);
    }
  }, [task])

  const confirm = () => {
    deleteTask(task.id);
    onClose();
  }

  return (
    task &&
      <div className='modal-container'>
        <p className="normal-text">Вы уверены что хотите удалить задачу?</p>
        <p className="heading-text">{name}</p>
        <p className="normal-text">{description}</p>
        <p className="normal-text">{date}</p>
        <Button className='primary' onClick={confirm}>Подтвердить</Button>
      </div>
  )
}

export default DeleteTask;