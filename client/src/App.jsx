import './styles/style.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Task
        title='Разработать макет главной страницы'
        description='Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.'
        date='2025-07-22'
        status={true}
      />
      <Task
        title='Разработать макет главной страницы'
        description='Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.'
        date='2025-07-22'
        status={false}
      />
    </div>
  );
}

export default App;
