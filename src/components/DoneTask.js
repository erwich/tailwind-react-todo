import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"

import { uncompleteTask } from '../state/todo'

const DoneTask = ({ text, value, id }) => {
  const dispatch = useDispatch()
  value = value || 1
  return (
    <div className="flex flex-wrap">
      <FontAwesomeIcon
        className="py-1 px-1 text-slate-500"
        icon={faRotateLeft}
        onClick={ () => {
          dispatch(uncompleteTask(id))
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
