import React, { useState } from 'react';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import { addTask } from './../utils/Tasks'

const AddTask = ({onClose}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const confirm = () => {
    addTask(name, description, date);
    onClose();
  }

  return (
    <div className='modal-container'>
      <p className="heading-text">Добавить задачу</p>
      <Input
        type='text'
        title='Задача'
        value={name}
        eraseButton={true}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type='text'
        title='Описание'
        value={description}
        eraseButton={true}
        onChange={e => setDescription(e.target.value)}
      />
      <Input 
        type="date"
        title='Дата'
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <Button onClick={confirm} className='primary'>Добавить</Button>
    </div>
  );
}

export default AddTask;