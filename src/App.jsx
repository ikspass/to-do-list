import "./styles/style.css";
import { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import IconButton from "./components/UI/IconButton/IconButton";
import EditTask from "./components/EditTask";
import Modal from "./components/Modal";
import { deleteTask, getTaskById, getTasks } from './utils/Tasks';
import Button from "./components/UI/Button/Button";
import Exception from "./components/Exception";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(getTasks() || []);
  const [showAll, setShowAll] = useState(false);

  const currentDate = new Date().toISOString().split('T')[0];

  const groupedTasks = tasks.reduce((acc, task) => {
    const date = task.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});

  const [addTaskModal, setAddTaskModal] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [deleteTaskModal, setDeleteTaskModal] = useState(false);

  const [deleteException, setDeleteException] = useState(false);

  const selectTask = (task) => {
    setSelectedTask(selectedTask && selectedTask.id === task.id ? null : task);
  };

  const updateTasks = () => {
    setTasks(getTasks());
    if (selectedTask) {
      setSelectedTask(getTaskById(selectedTask.id));
    }
  };

  const handleDeleteTask = () => {
    if(selectedTask) {
      deleteTask(selectedTask.id)
    }
  }

  const filteredGroupedTasks = showAll
    ? groupedTasks
    : Object.fromEntries(
        Object.entries(groupedTasks).filter(([date]) => date >= currentDate)
      );

  const sortedDates = Object.keys(filteredGroupedTasks).sort((a, b) => new Date(a) - new Date(b));

  return (
    <div className="page-container">
      <Exception 
        message={'Вы уверены что хотите удалить задачу?'}
        action={'or'}
        isOpen={deleteException}
        onClose={() => {setDeleteException(false); updateTasks()}}
        confirm={handleDeleteTask}
      />
      <p className="heading-text">Список задач</p>
      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Показать текущие и будущие' : 'Показать все'}
      </Button>
      <Modal 
        children={
          <AddTask
            onClose={() => {setAddTaskModal(false); updateTasks()}}
          />
        }
        isOpen={addTaskModal}
        onClose={() => {setAddTaskModal(false)}}
      />
      <Modal 
        children={
          <EditTask
            task={selectedTask}
            onClose={() => {setEditTaskModal(false); updateTasks()}}
          />
        }
        isOpen={editTaskModal}
        onClose={() => {setEditTaskModal(false);}}
      />
      <div className="horizontal-container">
        <div className="tasks-grid">
          {sortedDates.length > 0 ? (
            sortedDates.map(date => (
              <div key={date} className="tasks-group">
                <p className='small-text'>{date}</p>
                <div className="tasks-list">
                  {filteredGroupedTasks[date].map(task => (
                    <Task
                      onClick={() => selectTask(task)}
                      task={task}
                      isActive={selectedTask && selectedTask.id === task.id}
                      key={task.id}
                      update={updateTasks}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="small-text">Добавьте задачу</p>
          )}
        </div>
        <div className='buttons-pannel'>
          <div className="buttons-list">
            <IconButton action='add' onClick={() => setAddTaskModal(true)} />
            {selectedTask !== null && 
              <>
                <IconButton action='edit' onClick={() => setEditTaskModal(true)} />
                <IconButton action='delete' onClick={() => setDeleteException(true)} />
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;