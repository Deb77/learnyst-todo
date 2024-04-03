import { createSelector, createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleCompleteTodo: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], completed: !state[index].completed };
      }
    },
  },
});

export const { addTodo, toggleCompleteTodo, incrementByAmount } = todosSlice.actions;

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
