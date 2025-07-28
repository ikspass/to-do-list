import React, { useState } from 'react'
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

const AddTask = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(formattedDate)

  return (
    <div className='modal-container'>
      <p className="heading-text">Добавить задачу</p>
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
      <Button className='primary'>Добавить</Button>
    </div>
  )
}

export default AddTask;