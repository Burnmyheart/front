import { useDispatch, useSelector } from 'react-redux';
import './TodoList.css';
import { deleteTodo } from '../../redux/todos/actionCreators';

const TodoList = () => {
  const toto = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className='app-block todo-list'>
      <h2>Todo List</h2>
      {toto.length === 0 ? (
        <p>No todo </p>
      ) : (
        <ul>
          {toto.map((todos, i) => (
            <li key={todos.id}>
              <div className='todo-info'>
                {++i}. {todos.todo}
              </div>
              <div className='todo-action'>
                <button
                  type='Submit'
                  onClick={() => handleDeleteTodo(todos.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodoList;
