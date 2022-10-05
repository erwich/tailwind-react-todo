import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft, faX } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"

import { uncompleteTask, deleteTask } from '../state/todo'

const DoneTask = ({ text, value, id }) => {
  const dispatch = useDispatch()
  value = value || 1
  return (
    <div className="flex flex-wrap py-1">
      <FontAwesomeIcon
        className="py-1 px-1 text-slate-500"
        icon={faRotateLeft}
        onClick={ () => {
          dispatch(uncompleteTask(id))
        }}
      />
      <FontAwesomeIcon
        className="py-1 px-1 text-red-500 mr-2"
        icon={faX}
        onClick={ () => {
          dispatch(deleteTask(id))
        }}
      />
      <div
        className={`max-w-xs h-7 rounded shadow-lg bg-slate-200 hover:bg-slate-300`}
      >
        <p className="text-slate-500 italic line-through px-4 truncate">
          {text}
        </p>
      </div>
      <p className="px-1 text-green-500 font-bold">{value}🪙</p>
    </div>
  )
}

export default DoneTask
