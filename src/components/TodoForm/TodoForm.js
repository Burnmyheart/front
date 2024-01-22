import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';
import { addTodo } from '../../redux/todos/actionCreators';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    if (todo) {
      const todom = {
        todo,
        id: uuidv4(),
      };

      dispatch(addTodo(todom));
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
