import React, { useState } from 'react';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';
import { addTask } from './../utils/Tasks'
import Exception from './Exception';

const AddTask = ({onClose}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState('')
  
  const [exception, setException] = useState(false)

  const confirm = () => {
    if(name === '') {
      setMessage('Поле "Задача" не может быть пустым')
      setException(true)
    }
    else if(date === '') {
      setMessage('Поле "Дата" не может быть пустым')
      setException(true)
    }
    else{
      addTask(name, description, date);
      onClose();
      setName('');
      setDescription('');
      setDate(new Date().toISOString().split('T')[0]);
    }
  }


  return (
    
    <div className='modal-container'>
      <Exception 
        message={message}
        action={'ok'}
        isOpen={exception}
        onClose={() => {setException(false)}}
      />
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