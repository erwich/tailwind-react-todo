import React from "react"
import Header from "../../components/Header"
import AddTask from '../../components/AddTask'

const AddBar = () => {
  return (
    <div>
      <Header text="What Doin'" />
      <div className="flex gap-x-1">
        <AddTask />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Manage Categories
        </button>
      </div>
    </div>
  )
}

export default AddBar
