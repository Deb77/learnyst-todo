import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    all: [],
    active: [],
    completed: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.all.push(action.payload);
      state.active.push(action.payload);
    },
    completeTodo: (state) => {
      state.completed.push(action.payload);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addTodo, completeTodo, incrementByAmount } = todosSlice.actions;

export default todosSlice.reducer;
