export const addTask = (name, description, date) => {
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

export const editTask = (id, name, description, date) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const taskToUpdate = tasks.find(item => item.id === id);

  if (taskToUpdate) {
    taskToUpdate.name = name;
    taskToUpdate.description = description;
    taskToUpdate.date = date;

    localStorage.setItem('tasks', JSON.stringify(tasks));

  } else {
    console.log('При редактировании задачи произошла ошибка.');
  }
}

export const deleteTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  const newTasks = tasks.filter(item => item.id !== id);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

export const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

export const getTaskById = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    return task;
  }
  else{
    console.log('При получении задачи по id произошла ошибка')
  }
}

export const doneTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    task.status = true;

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
  else{
    console.log('При выполнении задачи произошла ошибка')
  }
}

export const unDoneTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks.find(item => item.id === id);
  if(task){
    task.status = false;

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }
  else{
    console.log('При отмене выполнения задачи произошла ошибка')
  }
}