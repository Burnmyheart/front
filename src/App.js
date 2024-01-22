import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Todo App</h1>
      </header>
      <main className='app-main'>
        <div className='app-left-column'>
          <TodoForm />
        </div>
        <div className='app-right-column'>
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
