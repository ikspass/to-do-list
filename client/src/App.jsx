import './styles/style.css';
import Task from './components/Task';
import PinList from './components/UI/PinList/PinList';
import Button from './components/UI/Button/Button';

function App() {

  const tasks = [
    {
      title: 'Разработать макет главной страницы',
      description: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.',
      date: '2025-07-22',
      status: true
    },
    {
      title: 'Разработать макет главной страницы',
      description: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.',
      date: '2025-07-22',
      status: true
    },
    {
      title: 'Разработать макет главной страницы',
      description: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.',
      date: '2025-07-22',
      status: true
    },
    {
      title: 'Разработать макет главной страницы',
      description: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.',
      date: '2025-07-22',
      status: true
    },
  ]

  return (
    <div className="page-container">
      <PinList
        selected = {0}
        values={['Выполнено', 'Невыполнено']}
      />
      <div className="horizontal-container">
        <div className="tasks-list">
          {
            tasks.map((task, index) => 
              <Task
                title={task.title}
                description={task.description}
                date={task.date}
                status={true}
              />
              
            )

          }
        </div>
        <div className="buttons-list">
          <Button>Добавить задачу</Button>
          <Button>Редактировать задачу</Button>
          <Button>Удалить задачу</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
