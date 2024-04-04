import { createSelector, createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos;
      const index = todos.findIndex((item) => item.id === id);
      if (index !== -1) {
        todos[index] = { ...todos[index], completed: !todos[index].completed };
      }
    },
    updateTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const todos = state.todos;
      const index = todos.findIndex((item) => item.id === id);
      if (index !== -1) {
        todos[index] = { ...todos[index], title, description };
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos;
      state.todos = todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleCompleteTodo, updateTodo, deleteTodo } = todosSlice.actions;

export const getCompletedTodos = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos.filter((item) => item.completed);
  }
);

export const getPendingTodos = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos.filter((item) => !item.completed);
  }
);

export default todosSlice.reducer;
