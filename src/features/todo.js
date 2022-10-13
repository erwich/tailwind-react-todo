import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  categories: [
    {
      name: "Work",
      colors: {
        bg: `bg-green-500`,
        hover: `hover:bg-green-600`,
        focus: `focus:bg-green-600`,
      },
    },
    {
      name: "General",
      colors: {
        bg: `bg-sky-400`,
        hover: `hover:bg-sky-500`,
        focus: `focus:bg-sky-500`,
      },
    },
    {
      name: "Family",
      colors: {
        bg: `bg-violet-500`,
        hover: `hover:bg-violet-600`,
        focus: `focus:bg-violet-600`,
      },
    },
    {
      name: "Personal",
      colors: {
        bg: `bg-pink-500`,
        hover: `hover:bg-pink-600`,
        focus: `focus:bg-pink-600`,
      },
    },
  ],
  tasks: [
    {
        id: uuidv4(),
        content: "This is a sample task. I sure hope I get this thing done. Double click me to mark me complete.",
        due: "2022-10-01",
        category: "General",
        value: 1,
        done: false,
    }
  ]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [
        ...state.tasks,
        {
          ...action.payload,
          id: uuidv4(),
        }
      ]
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map( task => task.id === action.payload ? { ...task, done: true } : task )
    },
    uncompleteTask: (state, action) => {
      state.tasks = state.tasks.map( task => task.id === action.payload ? { ...task, done: false } : task )
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter( task => task.id !== action.payload )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, completeTask, uncompleteTask, deleteTask } = todoSlice.actions

export default todoSlice.reducer
