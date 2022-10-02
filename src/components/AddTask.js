import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Modal from "../components/Modal"

import { addTask } from '../state/todo'

const AddTask = () => {
  const categories = useSelector(({todo}) => todo.categories)
  const [category, setCategory] = useState("General")
  const [text, setText] = useState("")
  const [due, setDue] = useState("")
  const [value, setValue] = useState(1)

  const dispatch = useDispatch()

  const clearAll = () => {
    setCategory("General")
    setText("")
    setDue("")
    setValue(1)
  }

  return (
    <Modal
      buttonClass={
        "flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      }
      buttonText={"Add Task"}
      title={"Add New Task"}
      confirmText={"Create Task"}
      onConfirm={ () => {
        dispatch( addTask({
          content: text,
          due,
          category,
          value,
          done: false,
        }))
        clearAll()
      }}
    >
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-slate-100"
          >
            What needs doing?
          </label>
          <textarea
            className="w-96 h-40 dark:bg-slate-700 dark:text-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Task to tackle"
            onChange={ e => { setText( e.target.value ) }}
            value={ text }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-slate-100 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select 
            className="dark:bg-slate-700 dark:text-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={ e => setCategory(e.target.value) }
            value={category}
          >
            { categories.map( ({name}, ndx) => <option value={name} key={ndx}>{name}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-slate-100"
          >
            Optional Due Date
          </label>
          <input
            type="date"
            className="w-80 dark:bg-slate-700 dark:text-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={ e => { setDue( e.target.value ) }}
            value={ due }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-slate-100"
          >
            Point Value
          </label>
          <input
            type="number"
            className="w-80 dark:bg-slate-700 dark:text-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={ e => { setValue( e.target.value ) }}
            value={ value }
          />
        </div>
      </form>
    </Modal>
  )
}

export default AddTask
