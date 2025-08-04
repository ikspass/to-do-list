import React, { useState } from 'react'
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

const EditTask = () => {
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

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
      <Button className='primary'>Сохранить</Button>
    </div>
  )
}

export default EditTask;