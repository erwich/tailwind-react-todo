import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './state/todo'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})