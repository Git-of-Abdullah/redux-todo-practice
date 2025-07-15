import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World"
    }
  ]
};

export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
        const new_todo = {
            id: nanoid(),
            text:action.payload
        }
      state.todos.push(new_todo);
    },

    RemoveTodo: (state,action) => {
        state.todos = state.todos.filter((todo) => todo.id != action.payload)
    },
    UpdateTodo: (state,action) => {
        state.todos = state.todos.map((todo) => 
        {
            if(todo.id === action.payload.id)
                {
                    return {...todo, text: action.payload.text}
                }
            return todo
        })
    }
  },

});


export const { AddTodo, RemoveTodo, UpdateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
