import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/reducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
