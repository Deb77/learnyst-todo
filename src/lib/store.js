import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './features/todos/todosSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosSlice,
    },
  });
};
