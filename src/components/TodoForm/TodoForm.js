import { useState } from 'react';
import './TodoForm.css';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    if (todo) {
      setTodo('');
    }
  };
  return (
    <div className='app-block todo-form'>
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='todo'>Todo:</label>
          <input
            type='text'
            id='todo'
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
        </div>
        <button type='Submit'> Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
