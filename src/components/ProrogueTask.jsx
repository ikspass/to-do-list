import React, { useState, useEffect } from 'react'
import { editTask } from '../utils/Tasks'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

const ProrogueTask = ({task, onClose}) => {

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
    editTask(task.id, task.name, task.description, date);

    onClose();
  }

  return (
    task &&
      <div className='modal-container'>
        <p className="heading-text">Перенести задачу</p>
        <p className="heading-text">{name}</p>
        <p className="normal-text">{description}</p>
        <Input 
          type="date"
          title='Дата'
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <Button className='primary' onClick={confirm}>Подтвердить</Button>
      </div>
  )
}

export default ProrogueTask;