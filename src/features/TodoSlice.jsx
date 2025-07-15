import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      isDone: false
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
            text:action.payload,
            isDone: false
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
    },
    DoneTodo:  (state,action) => {
      state.todos = state.todos.map((todo) => 
      {
          if(todo.id === action.payload)
              {
                  return {...todo, isDone: !(todo.isDone)}
              }
          return todo
      })
  }
  },

});


export const { AddTodo, RemoveTodo, UpdateTodo, DoneTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
