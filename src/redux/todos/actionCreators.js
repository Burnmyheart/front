import * as a from './actionTypes';

export const addTodo = newTodo => {
  return {
    type: a.ADD_TODO,
    payload: newTodo,
  };
};
