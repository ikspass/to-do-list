import "./styles/style.css";
import { useState } from "react";
import Task from "./components/Task";
import PinList from "./components/UI/PinList/PinList";
import Button from "./components/UI/Button/Button";
import AddTask from "./components/AddTask";
import IconButton from "./components/UI/IconButton/IconButton";
import EditTask from "./components/EditTask";
import Modal from "./components/Modal";
import { addTask, editTask, deleteTAsk, getTasks, getTAskById, doneTask, unDoneTask } from './utils/Tasks'

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  const [addTaskModal, setAddTaskModal] = useState(false)
  const [editTaskModal, setEditTaskModal] = useState(false)

  // const tasks = [
  //   {
  //     title: "Разработать макет главной страницы",
  //     description:
  //       "Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.",
  //     date: "2025-07-22",
  //   },
  //   {
  //     title: "Разработать макет главной страницы",
  //     description:
  //       "Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.",
  //     date: "2025-07-25",
  //   },
  //   {
  //     title: "Разработать макет главной страницы",
  //     description:
  //       "Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.",
  //     date: "2025-07-22",
  //   },
  //   {
  //     title: "Разработать макет главной страницы",
  //     description:
  //       "Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.",
  //     date: "2025-07-22",
  //   },
  // ];

  const selectTask = (index) => {
    setSelectedTask(selectedTask === index ? null : index);
  };

  return (
    <div className="page-container">
      <Modal 
        children={
          <AddTask
        
          />
        }
        isOpen={addTaskModal}
        onClose={() => {setAddTaskModal(false)}}
      />
      <Modal 
        children={
          <EditTask
        
          />
        }
        isOpen={editTaskModal}
        onClose={() => {setEditTaskModal(false)}}
      />
      <PinList selected={0} values={["Выполнено", "Невыполнено"]} />
      <div className="horizontal-container">
        <div className="tasks-list">
          {tasks.length > 0 ?
            tasks.map((task, index) => (
              <Task
                onClick={() => selectTask(index)}
                title={task.title}
                description={task.description}
                date={task.date}
                isActive={selectedTask === index}
                key={index}
              />
            ))
            :
            <p className="normal-text">Нет задач</p>
          }
        </div>
        <div className="buttons-list">
          <IconButton action='add' onClick={() => setAddTaskModal(true)}/>
          {selectedTask !== null && 
            <>
              <IconButton action='edit' onClick={() => setEditTaskModal(true)}/>
              <IconButton action='prorogue'/>
              <IconButton action='delete'/>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
