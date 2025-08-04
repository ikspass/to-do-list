const addTask = (name, description, date) => {
  if(name === '' || date === ''){
    alert('Поля "Задача" и "Дата" не могут быть пустыми')
  }

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;

  const newTask = {
    id: maxId + 1,
    name: name,
    description: description,
    date: date,
    status: false
  }

  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const editTask = (id, name, description, date) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  const taskToUpdate = tasks.find(item => item.id === id);

  if(taskToUpdate){
    taskToUpdate.name = name;
    taskToUpdate.description = description;
    taskToUpdate.date = date;
  }
  else{
    console.log('При редактировании задачи произошла ошибка.')
  }
}

const deleteTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  const newTasks = tasks.filter(item => item.id !== id);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

const getTaskById = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    return task;
  }
  else{
    console.log('При получении задачи по id произошла ошибка')
  }
}

const doneTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    task.status = true;
  }
  else{
    console.log('При выполнении задачи произошла ошибка')
  }
}

const unDoneTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    task.status = false;
  }
  else{
    console.log('При отмене выполнения задачи произошла ошибка')
  }
}