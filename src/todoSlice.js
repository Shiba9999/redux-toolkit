import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todoArr: []
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action);
      state.todoArr = [...state.todoArr, action.payload];
    },
    removeTodo: (state, action) => {
      state.todoArr = state.todoArr.filter(
        (eachObj) => eachObj.id !== action.payload
      );
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
