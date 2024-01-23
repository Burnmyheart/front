import * as a from './actionTypes';

export const addTodo = newTodo => {
  return {
    type: a.ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = id => {
  return {
    type: a.DELETE_TODO,
    payload: id,
  };
};
