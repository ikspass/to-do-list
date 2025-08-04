import "./styles/style.css";
import { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import IconButton from "./components/UI/IconButton/IconButton";
import EditTask from "./components/EditTask";
import Modal from "./components/Modal";
import { getTasks } from './utils/Tasks'
import DeleteTask from "./components/DeleteTask";
import ProrogueTask from "./components/ProrogueTask";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState(getTasks() || [])

  const groupedTasks = tasks.reduce((acc, task) => {
    const date = task.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});

  const [addTaskModal, setAddTaskModal] = useState(false)
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [prorogueTaskModal, setProrogueTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)

  const selectTask = (task) => {
    setSelectedTask(selectedTask && selectedTask.id === task.id ? null : task);
  };

  const updateTasks = () => {
    setTasks(getTasks());
  }


  return (
    <div className="page-container">
      <p className="heading-text">Список задач</p>
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
      <Modal 
        children={
          <ProrogueTask
            task={selectedTask}
            onClose={() => {setProrogueTaskModal(false); updateTasks()}}
          />
        }
        isOpen={prorogueTaskModal}
        onClose={() => {setProrogueTaskModal(false);}}
      />
      <Modal 
        children={
          <DeleteTask
            task={selectedTask}
            onClose={() => {setDeleteTaskModal(false); updateTasks()}}
          />
        }
        isOpen={deleteTaskModal}
        onClose={() => {setDeleteTaskModal(false);}}
      />
      <div className="horizontal-container">
      <div className="tasks-grid">
          {Object.keys(groupedTasks).length > 0 ? (
            Object.keys(groupedTasks).map(date => (
              <div key={date} className="tasks-group">
                <p className='small-text'>{date}</p>
                <div className="tasks-list">
                  {groupedTasks[date].map(task => (
                    <Task
                      onClick={() => selectTask(task)}
                      task={task}
                      isActive={selectedTask && selectedTask.id === task.id}
                      key={task.id}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="normal-text">Нет задач</p>
          )}
        </div>
        <div className="buttons-list">
          <IconButton action='add' onClick={() => setAddTaskModal(true)}/>
          {selectedTask !== null && 
            <>
              <IconButton action='edit' onClick={() => setEditTaskModal(true)}/>
              <IconButton action='prorogue' onClick={() => setProrogueTaskModal(true)}/>
              <IconButton action='delete' onClick={() => setDeleteTaskModal(true)}/>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
