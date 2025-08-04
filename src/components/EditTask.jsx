import React, { useState, useEffect } from 'react'
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import { editTask } from '../utils/Tasks'

const EditTask = ({task, onClose}) => {
  
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
    editTask(task.id, name, description, date)
    onClose();
    setName(task.name);
    setDescription(task.description);
    setDate(task.date);
  }

  return (
    <div className='modal-container'>
      <p className="heading-text">Редактировать задачу</p>
      <Input
        type='text'
        title='Задача'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type='text'
        title='Описание'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Input 
        type="date"
        title='Дата'
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <Button className='primary' onClick={confirm}>Сохранить</Button>
    </div>
  )
}

export default EditTask;