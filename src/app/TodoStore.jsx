import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../features/TodoSlice'

export const TodoStore = configureStore({
  reducer: {TodoSlice},
})