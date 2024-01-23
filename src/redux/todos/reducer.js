import * as a from './actionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TODO:
      return [...state, action.payload];
    case a.DELETE_TODO:
      return state.filter(todos => todos.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
